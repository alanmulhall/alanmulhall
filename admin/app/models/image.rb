class Image < ApplicationRecord
  KINDS = %w[painting drawing digital].freeze

  validates :title, presence: true
  validates :position, presence: true, numericality: { only_integer: true, greater_than: 0 }, uniqueness: true
  validates :cloudinary_public_id, presence: true
  validates :kind, inclusion: { in: KINDS }, allow_blank: true
  validates :visible, exclusion: { in: [ nil ] }
  validates :year, numericality: { only_integer: true, allow_nil: true,
                                   greater_than_or_equal_to: 1800,
                                   less_than_or_equal_to: Date.current.year }
  validates :dimensions, length: { maximum: 60 }, allow_blank: true

  scope :ordered, -> { order(:position) }

  def self.next_position
    (maximum(:position) || 0) + 1
  end

  # Move this image to a specific position by swapping with the image at that position.
  # Swap semantics: exchanges positions with the target image (no-op if target position is unoccupied).
  # Returns early if no image exists at the target position.
  def move_to(position)
    with_lock do
      other = self.class.where(position: position).lock.first
      return unless other

      original_position = self.position
      update_column(:position, 0)
      other.update_column(:position, original_position)
      update_column(:position, position)
    end
  end

  def display_url
    return nil unless cloudinary_public_id
    Cloudinary::Utils.cloudinary_url(cloudinary_public_id,
      transformation: [ { width: 1200, quality: 80, fetch_format: "auto" } ])
  end

  def thumbnail_url
    return nil unless cloudinary_public_id
    Cloudinary::Utils.cloudinary_url(cloudinary_public_id,
      transformation: [ { width: 400, height: 300, crop: "fit", quality: 70, fetch_format: "auto" } ])
  end
end
