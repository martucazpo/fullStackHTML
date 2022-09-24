const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use(routes)
require("./db")

app.listen(8000, ()=>console.log(`The app it listens...always...and on port 8000`))