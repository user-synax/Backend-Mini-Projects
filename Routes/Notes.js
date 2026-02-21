const express = require("express")
const {createNewNote} = require("../Controllers/note")

const router = express.Router()

router.get("/newnote", (req, res) => {
    res.render("newnote")
})

router.post("/newnote", createNewNote)
router.post("/updatednote", createNewNote)

module.exports = router