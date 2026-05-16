class AddKindToImages < ActiveRecord::Migration[8.1]
  def change
    add_column :images, :kind, :string
  end
end
