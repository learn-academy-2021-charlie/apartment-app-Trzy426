# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user_data = {
    email: 'IAmKingThanos@thanosisking.com',
    password: 'GauntletIsBae',
    password_confirmation: 'GauntletIsBae'
}
test_user = User.create(user_data)
if test_user.valid?
    puts "User created successfully"
    else puts "incorrect #{test_user.errors.full_messages}"
end
apartment = [
  {
    street: "jewell",
    city: "San Bernadino",
    state: "California",
    description: "Spacious with lots of testing equipment",
    manager:"Bon Jovi",
    email: "pickleRick@gmail.com",
    price: "10000 quarks",
    bedrooms: 2,
    bathrooms:10 
  },
  {
    street: "Picolo",
    city: "Ramadan",
    state: "Florida",
    description: "Place to eat all the food",
    manager:"Rick Flair",
    email: "ImADatabase@gmail.com",
    price: "500 pushups",
    bedrooms: 3,
    bathrooms: 1
  },
  {
    street: "Underwater Basket Weaving",
    city: "Woot Woot",
    state: "Alaska",
    description: "Perfectly Balanced Apartment after the Snappening",
    manager:"Josh Brolin",
    email: "IAmKingThanos@thanosisking.com",
    price: "0",
    bedrooms: 5,
    bathrooms:5 
  },
]

apartment.each do |attributes|
   test_user.apartments.create attributes
   puts "creating apartments #{attributes}"
end
