FactoryBot.define do
  factory :image do
    sequence(:title) { |n| "Painting #{n}" }
    medium { "Oil on canvas" }
    year { 2024 }
    sequence(:position) { |n| n }
    cloudinary_public_id { "mulhall-portfolio/sample_#{SecureRandom.hex(4)}" }
    cloudinary_url { "https://res.cloudinary.com/demo/image/upload/#{cloudinary_public_id}.jpg" }
  end
end
