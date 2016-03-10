# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do
  Bench.create!(
  description: Faker::Lorem.sentence(3),
  lat: rand(36000..380000)/1000,
  lng: rand(-122000..123000)/1000
  )
end
