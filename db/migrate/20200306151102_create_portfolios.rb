class CreatePortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :portfolios do |t|
      t.string :name
      t.decimal :cash_to_spare, :precision => 4, :scale => 3
      t.decimal :money_invested, :precision => 4, :scale => 3

      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
