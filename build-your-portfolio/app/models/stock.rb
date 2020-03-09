class Stock < ApplicationRecord
  belongs_to :portfolio, optional: true
end
