const Note = require("../Models/notes")

const createNewNote = async (req, res) => {
    const { note, description } = req.body
    if (!note) return res.json({ Error: "Please Fill Required Fields" })
    await Note.create({
        note: note,
        Description: description
    })
    return res.render('newnote', {
        msg: `New Note Created`
    })
}

const updateNote = async (req, res) => {
    const { updatedNote, updatedDescription } = req.body
    if (!updateNote) return res.json({ Error: "Please Fill Required Fields" })
    await Note.findOneAndUpdate({
        // _id: 
    })
    return res.render('newnote', {
        msg: `New Note Created`
    })
}

module.exports = {
    createNewNote
}