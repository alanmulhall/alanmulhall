require "rails_helper"

RSpec.describe "GET /api/images", type: :request do
  before { create_list(:image, 3) }

  it "returns 200" do
    get "/api/images"
    expect(response).to have_http_status(:ok)
  end

  it "returns JSON" do
    get "/api/images"
    expect(response.content_type).to include("application/json")
  end

  it "returns all images" do
    get "/api/images"
    expect(JSON.parse(response.body).length).to eq(3)
  end

  it "includes expected fields" do
    get "/api/images"
    item = JSON.parse(response.body).first
    expect(item.keys).to include("id", "title", "medium", "year", "position", "url")
  end

  it "returns images ordered by position" do
    get "/api/images"
    positions = JSON.parse(response.body).map { |i| i["position"] }
    expect(positions).to eq(positions.sort)
  end

  it "excludes images where visible is false" do
    create(:image, visible: false)
    get "/api/images"
    expect(JSON.parse(response.body).length).to eq(3)
  end

  it "returns display_url as the url field" do
    get "/api/images"
    item = JSON.parse(response.body).first
    expect(item["url"]).to be_a(String).and include("cloudinary")
  end
end
