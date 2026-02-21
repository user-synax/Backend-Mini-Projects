const mongoose = require("mongoose")

const notesSchema = mongoose.Schema({
    note: {
        type: String,
        required: true
    },
    Description: {
        type: String
    }
}, { timestamps: true })

const Note = mongoose.model('note', notesSchema)

module.exports = Note