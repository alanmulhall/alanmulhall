class AddUniqueIndexToImagesPosition < ActiveRecord::Migration[8.1]
  def change
    add_index :images, :position, unique: true
  end
end
