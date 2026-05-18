require "rails_helper"

def auth_headers
  credentials = ActionController::HttpAuthentication::Basic.encode_credentials(
    ENV.fetch("ADMIN_USERNAME", "admin"),
    ENV.fetch("ADMIN_PASSWORD", "password")
  )
  { "HTTP_AUTHORIZATION" => credentials }
end

RSpec.describe "Admin::Images", type: :request do
  describe "GET /admin/images" do
    it "requires authentication" do
      get "/admin/images"
      expect(response).to have_http_status(:unauthorized)
    end

    it "returns 200 with valid credentials" do
      get "/admin/images", headers: auth_headers
      expect(response).to have_http_status(:ok)
    end

    it "lists existing images" do
      image = create(:image)
      get "/admin/images", headers: auth_headers
      expect(response.body).to include(image.title)
    end
  end

  describe "GET /admin/images/new" do
    it "returns 200" do
      get "/admin/images/new", headers: auth_headers
      expect(response).to have_http_status(:ok)
    end
  end

  describe "POST /admin/images" do
    let(:valid_params) do
      { image: { title: "West Cork", medium: "Oil on canvas", year: 2024, position: 1,
                 cloudinary_public_id: "mulhall-portfolio/test", cloudinary_url: "https://example.com/img.jpg" } }
    end

    it "requires authentication" do
      post "/admin/images", params: valid_params
      expect(response).to have_http_status(:unauthorized)
    end

    it "redirects on success" do
      allow_any_instance_of(Admin::ImagesController).to receive(:upload_to_cloudinary).and_return(
        { "public_id" => "mulhall-portfolio/test", "secure_url" => "https://example.com/img.jpg" }
      )
      post "/admin/images", params: { image: { title: "West Cork", medium: "Oil on canvas", year: 2024, position: 1 } },
           headers: auth_headers
      expect(response).to redirect_to(admin_images_path)
    end
  end

  describe "DELETE /admin/images/:id" do
    let!(:image) { create(:image) }

    it "requires authentication" do
      delete "/admin/images/#{image.id}"
      expect(response).to have_http_status(:unauthorized)
    end

    it "deletes the image and redirects" do
      allow(Cloudinary::Uploader).to receive(:destroy)
      delete "/admin/images/#{image.id}", headers: auth_headers
      expect(response).to redirect_to(admin_images_path)
      expect(Image.find_by(id: image.id)).to be_nil
    end
  end

  describe "PATCH /admin/images/:id/move_up" do
    let!(:image1) { create(:image, position: 1) }
    let!(:image2) { create(:image, position: 2) }

    it "swaps positions" do
      patch "/admin/images/#{image2.id}/move_up", headers: auth_headers
      expect(image2.reload.position).to eq(1)
      expect(image1.reload.position).to eq(2)
    end
  end

  describe "GET /admin/images/:id/edit" do
    let!(:image) { create(:image) }

    it "requires authentication" do
      get "/admin/images/#{image.id}/edit"
      expect(response).to have_http_status(:unauthorized)
    end

    it "returns 200 with valid credentials" do
      get "/admin/images/#{image.id}/edit", headers: auth_headers
      expect(response).to have_http_status(:ok)
    end
  end

  describe "PATCH /admin/images/:id" do
    let!(:image) { create(:image) }

    it "requires authentication" do
      patch "/admin/images/#{image.id}", params: { image: { title: "New Title" } }
      expect(response).to have_http_status(:unauthorized)
    end

    it "updates the image and redirects" do
      patch "/admin/images/#{image.id}",
            params: { image: { title: "Updated Title" } },
            headers: auth_headers
      expect(response).to redirect_to(admin_images_path)
      expect(image.reload.title).to eq("Updated Title")
    end

    it "renders edit with unprocessable_entity on validation failure" do
      patch "/admin/images/#{image.id}",
            params: { image: { title: "" } },
            headers: auth_headers
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe "PATCH /admin/images/:id/move_down" do
    let!(:image1) { create(:image, position: 1) }
    let!(:image2) { create(:image, position: 2) }

    it "swaps positions" do
      patch "/admin/images/#{image1.id}/move_down", headers: auth_headers
      expect(image1.reload.position).to eq(2)
      expect(image2.reload.position).to eq(1)
    end

    it "does nothing when there is no image below" do
      patch "/admin/images/#{image2.id}/move_down", headers: auth_headers
      expect(image2.reload.position).to eq(2)
    end
  end
end
