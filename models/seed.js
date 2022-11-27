///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////

const mongoose = require("./connection")
const Animal = require("./animal")


///////////////////////////////////////////
// Seed Code
//////////////////////////////////////////////
// Seed Route: A route on our server when requested will delete everything in our database and re - seed it with some starter data
// Seed File: A script we can run (usually called seed.js) that'll empty and re-seed our database.

// AKA - fake data for testing and/or demoing

// Make sure code is not run till connected
mongoose.connection.on("open", () => {
	///////////////////////////////////////////////
	// Write your Seed Code Below
	//////////////////////////////////////////////

	// Run any database queries in this function
	const startAnimals = [
		{
			name: "Kangaroo",
			species: "mammals",
			extinct: false,
			location: "Oceania",
			lifeExpectancy: 10,
		},

		{
			name: "Elephant",
			species: "mammals",
			extinct: false,
			location: "Asia",
			lifeExpectancy: 70,
		},

		{
			name: "Penguin",
			species: "birds",
			extinct: false,
			location: "Antarctica",
			lifeExpectancy: 26,
		},

		{
			name: "Toucan",
			species: "birds",
			extinct: false,
			location: "Central America",
			lifeExpectancy: 20,
		},

		{
			name: "Seahorse",
			species: "fish",
			extinct: false,
			location: "North America",
			lifeExpectancy: 6,
		},

		{
			name: "Orca",
			species: "mammals",
			extinct: false,
			location: "Antarctica",
			lifeExpectancy: 50,
		},

		{
			name: "Jellyfish",
			species: "invertebrates",
			extinct: false,
			location: "Antarctica",
			lifeExpectancy: 1,
		}
	]

	// Delete all fruits
	Animal.deleteMany({}, (err, data) => {
		// Seed Starter Animals
		Animal.create(startAnimals, (err, data) => {
			// log the create animals to confirm
			console.log("--------ANIMALS CREATED----------")
			console.log(data)


			// close the DB connection
			mongoose.connection.close()
		})
	})
})
