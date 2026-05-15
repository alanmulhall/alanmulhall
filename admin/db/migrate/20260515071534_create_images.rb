class CreateImages < ActiveRecord::Migration[8.1]
  def change
    create_table :images do |t|
      t.string :title
      t.string :medium
      t.integer :year
      t.integer :position
      t.string :cloudinary_public_id
      t.string :cloudinary_url

      t.timestamps
    end
  end
end
