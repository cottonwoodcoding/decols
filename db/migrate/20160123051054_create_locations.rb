class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :loc_type
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.float :lat
      t.float :long

      t.timestamps null: false
    end
  end
end
