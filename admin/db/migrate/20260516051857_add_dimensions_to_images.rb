class AddDimensionsToImages < ActiveRecord::Migration[8.1]
  def change
    add_column :images, :dimensions, :string
  end
end
