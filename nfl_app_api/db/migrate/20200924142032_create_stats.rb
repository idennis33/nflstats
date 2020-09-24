class CreateStats < ActiveRecord::Migration[6.0]
  def change
    create_table :stats do |t|
      t.string :name
      t.integer :yards
      t.string :team
      t.string :img

      t.timestamps
    end
  end
end
