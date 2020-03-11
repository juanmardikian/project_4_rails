class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.string :name
      t.float :price
      t.string :stock_type
      t.references :portfolio, foreign_key: true

      t.timestamps
    end
  end
end
