class Api::ImagesController < ApplicationController
  def index
    images = Image.all.map do |img|
      {
        id: img.id,
        title: img.title,
        medium: img.medium,
        year: img.year,
        position: img.position,
        url: img.display_url
      }
    end
    render json: images
  end
end
