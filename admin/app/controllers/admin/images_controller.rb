class Admin::ImagesController < Admin::BaseController
  before_action :set_image, only: [ :edit, :update, :destroy, :move_up, :move_down ]

  def index
    @images = Image.all
  end

  def new
    @image = Image.new(position: next_position)
  end

  def create
    @image = Image.new(image_params.except(:file))
    file = params.dig(:image, :file)
    upload = upload_to_cloudinary(file)

    if upload
      @image.cloudinary_public_id = upload["public_id"]
      @image.cloudinary_url = upload["secure_url"]
    elsif file.present?
      @image.errors.add(:file, "could not be processed — please upload a valid image file")
      return render :new, status: :unprocessable_entity
    else
      @image.errors.add(:file, "can't be blank")
      return render :new, status: :unprocessable_entity
    end

    if @image.save
      redirect_to admin_images_path, notice: "Image added."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    file = params.dig(:image, :file)
    if file.present?
      upload = upload_to_cloudinary(file)
      if upload
        @image.cloudinary_public_id = upload["public_id"]
        @image.cloudinary_url = upload["secure_url"]
      else
        @image.errors.add(:file, "could not be processed — please upload a valid image file")
        return render :edit, status: :unprocessable_entity
      end
    end

    if @image.update(image_params.except(:file))
      redirect_to admin_images_path, notice: "Image updated."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    Cloudinary::Uploader.destroy(@image.cloudinary_public_id) if @image.cloudinary_public_id.present?
    @image.destroy
    redirect_to admin_images_path, notice: "Image deleted."
  end

  def move_up
    swap_positions(@image, @image.position - 1)
    redirect_to admin_images_path
  end

  def move_down
    swap_positions(@image, @image.position + 1)
    redirect_to admin_images_path
  end

  private

  def set_image
    @image = Image.find(params[:id])
  end

  def image_params
    params.require(:image).permit(:title, :kind, :medium, :dimensions, :year, :position, :visible, :file)
  end

  def next_position
    (Image.maximum(:position) || 0) + 1
  end

  def upload_to_cloudinary(file)
    return nil if file.blank?

    image = MiniMagick::Image.open(file.path)
    if image.width > 2000 || image.height > 2000
      image.resize "2000x2000>"
      image.write file.path
    end

    Cloudinary::Uploader.upload(file.path, folder: "mulhall-portfolio")
  rescue CloudinaryException, MiniMagick::Error, MiniMagick::Invalid => e
    Rails.logger.error("Image upload failed: #{e.class}: #{e.message}")
    nil
  end

  def swap_positions(image, target_position)
    other = Image.find_by(position: target_position)
    return unless other

    Image.transaction do
      other.update_column(:position, image.position)
      image.update_column(:position, target_position)
    end
  end
end
