class AddVisibleToImages < ActiveRecord::Migration[8.1]
  def change
    add_column :images, :visible, :boolean, default: true, null: false
  end
end
