////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express")
const Animal = require("../models/animal")

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router()

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

router.get("/seed", (req, res) => {})

// INDEX Route
router.get("/", (req, res) => {
	Animal.find({})
		.then((animals) => {
			res.render("animals/index.ejs", { animals })
		})
})

// New Route
router.get("/new", (req, res) => {
	res.render("animals/new.ejs")
})

// Create Route
router.post("/", (req, res) => {
	req.body.extinct = req.body.extinct === "on" ? true : false

	Animal.create(req.body, (err, animal) => {
		res.redirect("/animals")
	})
})


// Edit Route
router.get("/:id/edit", (req, res) => {
	const id = req.params.id
	Animal.findById(id, (err, animal) => {
		res.render("animals/edit.ejs", { animal })
	})
})

// Update Route
router.put("/:id", (req, res) => {
	req.body.extinct = req.body.extinct === "on" ? true : false

	Animal.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, animal) => {

			res.redirect(`/animals/${req.params.id}`)
		}
	)
})

// Delete Route
router.delete("/:id", async (req, res) => {
	const deletedAnimal = await Animal.findByIdAndDelete(req.params.id)
    
	if (deletedAnimal) {
		res.redirect("/animals/")
	}
})

// Show Route
router.get("/:id", (req, res) => {
    Animal.findById(req.params.id).then((animal) => {
        res.render("animals/show.ejs", { animal })
    })
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router
