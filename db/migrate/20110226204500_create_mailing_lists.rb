class CreateMailingLists < ActiveRecord::Migration
  def self.up
    create_table :mailing_lists do |t|
      t.integer :host_id
      t.integer :list_type_id
      t.string :name
      t.timestamps
    end
  end

  def self.down
    drop_table :mailing_lists
  end
end
