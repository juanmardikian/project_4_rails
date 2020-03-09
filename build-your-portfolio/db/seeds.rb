# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

20.times do
  @user = User.create(name: Faker::Name.name,
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
                          price: 289.03)
end

100.times do
  Stock.create(name:"Alphabet Inc.",
                          symbol: "GOOG",
                          price: 1298.41)
end

100.times do
  Stock.create(name: "Facebook, Inc.",
                          symbol:"FB",
                          price: 181.09)
end

100.times do
  Stock.create(name: "Microsoft Corporation",
                          symbol: "MSFT",
                          price: 161.57)
end

100.times do
  Stock.create(name:"Amazon.com, Inc.",
                          symbol:"AMZN",
                          price: 1901.09)
end

#Food
100.times do
  Stock.create(name:"The Coca-Cola Company",
                          symbol:"KO",
                          price: 55.26)
end

100.times do
  Stock.create(name:"PepsiCo, Inc." ,
                          symbol:"PEP",
                          price: 137.26)
end

100.times do
  Stock.create(name:"McDonald's Corporation",
                          symbol:"MCD",
                          price: 198.86)
end

100.times do
  Stock.create(name: "Starbucks Corporation",
                          symbol:"SBUX",
                          price: 75.34)
end

100.times do
    Stock.create(name:"The Procter & Gamble Company",
                            symbol: "PG",
                            price: 121.66)
end
  
#Health
100.times do
  Stock.create(name:"Pfizer Inc." ,
                          symbol: "PFE",
                          price: 35.02)
end

100.times do
    Stock.create(name:"Johnson & Johnson",
                            symbol: "JNJ",
                            price: 142.03)
end

100.times do
      Stock.create(name:"Novartis AG",
                              symbol: "NVS",
                              price: 88.82)
end

100.times do
  Stock.create(name:"AbbVie Inc.",
                          symbol: "ABBV",
                          price: 85.72)
end

100.times do
  Stock.create(name:"Sanofi",
                          symbol: "SNY",
                          price: 48.44)
end

#Robotics
100.times do
  Stock.create(name:"International Business Machines Corporation",
                          symbol: "IBM",
                          price: 127.73)
end

100.times do
  Stock.create(name:"NVIDIA Corporation",
                          symbol: "NVDA",
                          price: 266.04)
end

100.times do
  Stock.create(name:"Tesla, Inc.",
                          symbol: "TSLA",
                          price: 703.48)
end

100.times do
  Stock.create(name:"Alibaba Group Holding Limited",
                          symbol: "BABA",
                          price: 204.64)
end

100.times do
  Stock.create(name:"Intel Corporation",
                          symbol: "INTC",
                          price: 55.77)
end

#Banks

100.times do
  Stock.create(name:"Bank of America Corporation",
                          symbol: "BAC",
                          price: 25.71)
end

100.times do
  Stock.create(name:"Citigroup Inc.",
                          symbol: "C",
                          price: 61.28)
end

100.times do
  Stock.create(name:"HSBC Holdings plc",
                          symbol: "HSBC",
                          price: 61.28)
end

100.times do
  Stock.create(name:"The Goldman Sachs Group, Inc.",
                          symbol: "GS",
                          price: 32.26)
end

