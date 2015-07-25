class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :ethnicity
      t.string :occupation

      t.timestamps null: false
    end
  end
end
