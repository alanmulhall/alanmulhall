class Image < ApplicationRecord
  KINDS = %w[painting drawing digital].freeze

  validates :title, presence: true
  validates :position, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :cloudinary_public_id, presence: true
  validates :kind, inclusion: { in: KINDS }, allow_blank: true

  default_scope { order(:position) }

  def display_url(transformations = "w_1200,q_80,f_auto")
    return nil unless cloudinary_public_id
    Cloudinary::Utils.cloudinary_url(cloudinary_public_id, transformation: transformations)
  end

  def thumbnail_url
    display_url("w_400,h_300,c_fit,q_70,f_auto")
  end
end
