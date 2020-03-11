# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

20.times do
  @user = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password: Faker::Internet.password(min_length: 7, max_length: 9))

  @user.portfolios.build(name: "My Portfolio")

  puts @user.portfolios.length
  @user.save
end

puts Portfolio.all.length

#Software
100.times do
  Stock.create(name: "Apple Inc",
               symbol: "AAPL",
               price: 289.03,
               stock_type: "Software")
end

100.times do
  Stock.create(name: "Alphabet Inc.",
               symbol: "GOOG",
               price: 1298.41,
               stock_type: "Software")
end

100.times do
  Stock.create(name: "Facebook, Inc.",
               symbol: "FB",
               price: 181.09,
               stock_type: "Software")
end

100.times do
  Stock.create(name: "Microsoft Corporation",
               symbol: "MSFT",
               price: 161.57,
               stock_type: "Software")
end

100.times do
  Stock.create(name: "Amazon.com, Inc.",
               symbol: "AMZN",
               price: 1901.09,
               stock_type: "Software")
end

#Food
100.times do
  Stock.create(name: "The Coca-Cola Company",
               symbol: "KO",
               price: 55.26,
               stock_type: "Food")
end

100.times do
  Stock.create(name: "PepsiCo, Inc.",
               symbol: "PEP",
               price: 137.26,
               stock_type: "Food")
end

100.times do
  Stock.create(name: "McDonald's Corporation",
               symbol: "MCD",
               price: 198.86,
               stock_type: "Food")
end

100.times do
  Stock.create(name: "BURGER KING HOLDINGS INC",
               symbol: "BKC",
               price: 17.00,
               stock_type: "Food")
end

100.times do
  Stock.create(name: "Starbucks Corporation",
               symbol: "SBUX",
               price: 75.34,
               stock_type: "Food")
end

#Health
100.times do
  Stock.create(name: "Pfizer Inc.",
               symbol: "PFE",
               price: 35.02,
               stock_type: "Health")
end

100.times do
  Stock.create(name: "Johnson & Johnson",
               symbol: "JNJ",
               price: 142.03,
               stock_type: "Health")
end

100.times do
  Stock.create(name: "Novartis AG",
               symbol: "NVS",
               price: 88.82,
               stock_type: "Health")
end

100.times do
  Stock.create(name: "AbbVie Inc.",
               symbol: "ABBV",
               price: 85.72,
               stock_type: "Health")
end

100.times do
  Stock.create(name: "Sanofi",
               symbol: "SNY",
               price: 48.44,
               stock_type: "Health")
end

#Robotics
100.times do
  Stock.create(name: "International Business Machines Corporation",
               symbol: "IBM",
               price: 127.73,
               stock_type: "Robotics")
end

100.times do
  Stock.create(name: "NVIDIA Corporation",
               symbol: "NVDA",
               price: 266.04,
               stock_type: "Robotics")
end

100.times do
  Stock.create(name: "Tesla, Inc.",
               symbol: "TSLA",
               price: 703.48,
               stock_type: "Robotics")
end

100.times do
  Stock.create(name: "Alibaba Group Holding Limited",
               symbol: "BABA",
               price: 204.64,
               stock_type: "Robotics")
end

100.times do
  Stock.create(name: "Intel Corporation",
               symbol: "INTC",
               price: 55.77,
               stock_type: "Robotics")
end

#Banks

100.times do
  Stock.create(name: "Bank of America Corporation",
               symbol: "BAC",
               price: 25.71,
               stock_type: "Banks")
end

100.times do
  Stock.create(name: "Citigroup Inc.",
               symbol: "C",
               price: 61.28,
               stock_type: "Banks")
end

100.times do
  Stock.create(name: "The Goldman Sachs Group, Inc.",
               symbol: "GS",
               price: 32.26,
               stock_type: "Banks")
end
100.times do
  Stock.create(name: "HSBC Holdings plc",
               symbol: "HSBC",
               price: 61.28,
               stock_type: "Banks")
end

100.times do
  Stock.create(name: " JPMorgan Chase & Co.",
               symbol: "JPM",
               price: 98.55,
               stock_type: "Banks")
end
