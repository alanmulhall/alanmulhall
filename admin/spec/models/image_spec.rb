require "rails_helper"

RSpec.describe Image, type: :model do
  subject { build(:image) }

  describe "validations" do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:position) }
    it { is_expected.to validate_presence_of(:cloudinary_public_id) }
    it { is_expected.to validate_numericality_of(:position).only_integer.is_greater_than(0) }
    it { is_expected.to validate_inclusion_of(:kind).in_array(Image::KINDS).allow_blank }

    it "is valid with visible true" do
      subject.visible = true
      expect(subject).to be_valid
    end

    it "is valid with visible false" do
      subject.visible = false
      expect(subject).to be_valid
    end

    it "is invalid with visible nil" do
      subject.visible = nil
      expect(subject).not_to be_valid
      expect(subject.errors[:visible]).to be_present
    end
  end

  describe "KINDS" do
    it "contains painting, drawing, and digital" do
      expect(Image::KINDS).to contain_exactly("painting", "drawing", "digital")
    end
  end

  describe "default_scope" do
    it "orders records by position ascending" do
      create(:image, position: 3)
      create(:image, position: 1)
      create(:image, position: 2)
      expect(Image.all.map(&:position)).to eq([1, 2, 3])
    end
  end

  describe "#display_url" do
    it "returns nil when cloudinary_public_id is absent" do
      subject.cloudinary_public_id = nil
      expect(subject.display_url).to be_nil
    end

    it "returns a URL with quality transformation applied" do
      subject.cloudinary_public_id = "mulhall-portfolio/test"
      expect(subject.display_url).to include("q_80")
    end

    it "includes the public_id in the URL" do
      subject.cloudinary_public_id = "mulhall-portfolio/test"
      expect(subject.display_url).to include("mulhall-portfolio/test")
    end
  end

  describe "#thumbnail_url" do
    it "returns nil when cloudinary_public_id is absent" do
      subject.cloudinary_public_id = nil
      expect(subject.thumbnail_url).to be_nil
    end

    it "returns a URL containing the thumbnail width transformation" do
      subject.cloudinary_public_id = "mulhall-portfolio/test"
      expect(subject.thumbnail_url).to include("w_400")
    end

    it "includes the public_id in the URL" do
      subject.cloudinary_public_id = "mulhall-portfolio/test"
      expect(subject.thumbnail_url).to include("mulhall-portfolio/test")
    end
  end
end
