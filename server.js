const express = require("express")
const connectDB = require("./DBconnection")
const path = require("path")
const notesRouter = require("./Routes/Notes")
const staticRouter = require("./Routes/Static")
const apiRouter = require("./Routes/ApiRouter")

const app = express()
const PORT = 9090
connectDB('mongodb://localhost:27017/notes')

app.set("view engine", 'ejs')
app.set('views', path.resolve("./views"))
app.use(express.urlencoded({ extended: false }));

app.use("/", staticRouter)
app.use("/note", notesRouter)
app.use("/api", apiRouter)

app.listen(PORT, () => console.log(`Started: http://localhost:${PORT}`))