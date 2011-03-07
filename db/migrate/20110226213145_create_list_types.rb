class CreateListTypes < ActiveRecord::Migration
  def self.up
    create_table :list_types do |t|
      t.string :name
      t.string :description
      t.timestamps
    end
  end

  def self.down
    drop_table :list_types
  end
end