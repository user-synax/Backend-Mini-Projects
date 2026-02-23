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
    const { id, note, Description } = req.body;
    await Note.findByIdAndUpdate(id, {
        note: note,
        Description: Description
    });
    res.redirect("/");
}

const deleteNote = async (req, res) => {
    try {        
        const { id } = req.body;
        await Note.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createNewNote,
    updateNote,
    deleteNote
}