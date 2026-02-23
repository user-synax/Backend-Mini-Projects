const express = require("express")
const {createNewNote, updateNote, deleteNote} = require("../Controllers/note")

const router = express.Router()

router.get("/newnote", (req, res) => {
    res.render("newnote")
})

router.post("/newnote", createNewNote)
router.post("/updatenote", updateNote)
router.post("/deletenote", deleteNote)

module.exports = router