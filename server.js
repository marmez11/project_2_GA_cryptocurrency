/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const PORT = process.env.PORT || 4000
const cryptoRouter = require("./controllers/movie")

/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const crypto_app = express()


/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
crypto_app.use(morgan("tiny"))
crypto_app.use(express.urlencoded({extended: true}))
crypto_app.use(methodOverride("_method"))
crypto_app.use("/static", express.static("public"))

/////////////////////////////////////////////////////
// Routes and Routers
/////////////////////////////////////////////////////
crypto_app.get("/", (request, response) => {
    response.send("Server is working")
})
// establish routers
crypto_app.use("/crypto", cryptoRouter)


//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})