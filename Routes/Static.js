const express = require("express")
const Note = require("../Models/notes")

const router = express.Router()

router.get("/", async (req, res) => {
    const notes = await Note.find({})
    res.render("index", {
        notes: notes,
    })
})

module.exports = router