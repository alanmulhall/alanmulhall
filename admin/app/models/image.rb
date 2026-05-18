class Image < ApplicationRecord
  KINDS = %w[painting drawing digital].freeze

  validates :title, presence: true
  validates :position, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :cloudinary_public_id, presence: true
  validates :kind, inclusion: { in: KINDS }, allow_blank: true
  validates :visible, inclusion: { in: [ true, false ] }

  default_scope { order(:position) }

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
