const express = require("express")
const Note = require("../Models/notes")

const router = express.Router()

router.get("/allnotes", async (req, res) => {
    const notes = await Note.find({})
    res.json(notes)
})

module.exports = router