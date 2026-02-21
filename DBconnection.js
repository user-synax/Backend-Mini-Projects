const mongoose = require("mongoose")

const connectDB = (url) => {
    mongoose.connect(url)
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log(`Error: ${err}`))
}

module.exports = connectDB