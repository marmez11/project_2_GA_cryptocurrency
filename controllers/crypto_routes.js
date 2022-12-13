/// creating dependencies and libraries
const express = require("express");
const bcrypt = require("bcryptjs");
/// connecting to the Data
const crypto_exchange = require("../model/crypto_ex");
const ethereum = require("../model/ethereum_data");
const bitcoin = require("../model/bitcoin_data")
const { request } = require("http");
const { response } = require("express");

// creating router 
const router = express.Router();

///////////////////////////////
/// Cryptocurrency Display Routes
///////////////////////////////

// Error Handler
function errorHandler(error, res){
    res.json(error)
}

// data display routes
router.get("/crypto_exchange_data", (request, response) => {
    response.send({crypto_exchange})
})
router.get("/bitcoin_data", async(request, response) => {
    response.send({bitcoin})
})
router.get("/ethereum_data", async(request, response) => {
    response.send({ethereum})
})

// home route, checking if server is running (Index)
router.get("/", async(request, response)=>{
    response.render('crypto_index.ejs', {bitcoin: bitcoin, ethereum: ethereum, crypto_ex: crypto_exchange})
})

// NEW route: (New) route for adding new pokemon to pokedex
router.get('/crypto_exchange_new', (request, response)=>{
    response.render("crypto_exchange_new.ejs")
  })

// NEW route: (New) route for adding new pokemon to pokedex
router.get('/crypto_bitcoin_new', (request, response)=>{
    response.render("crypto_bitcoin_new.ejs")
  })

// NEW route: (New) route for adding new pokemon to pokedex
router.get('/crypto_ethereum_new', (request, response)=>{
    response.render("crypto_ethereum_new.ejs")
  })

// crypto exchange instance for coin/token (Show) display route
router.get("/crypto_exchange_show", async(request, response)=>{
    response.render('crypto_exchange_show.ejs', {crypto_ex: crypto_exchange})
})

// crypto exchange for individual exchange instance for coin/token (Show) display route
router.get("/crypto_exchange_show/:id", async(request, response)=>{
    response.render('crypto_exchange_show_2.ejs', {crypto_ex: crypto_exchange[request.params.id], id: request.params.id})
})

// Destroy ROUTE - (DELETE) - DELETES ONE crypto exchange data instance
router.delete("/crypto_exchange_show/:id", async(request, response) => {
    crypto_exchange.splice(request.params.id, 1); //remove the item from the array
    response.redirect("/"); //redirect back to index route
  });

// (EDIT) Route for editing crypto exchange instance information
router.get("/crypto_exchange_edit/:id", async(request, response)=> {
    response.render("crypto_exchange_edit.ejs", {crypto_ex: crypto_exchange[request.params.id], id: request.params.id})
})

// (UPDATE) ROUTE - PUT - updates a crypto exchange instance --> adds to the edit page
router.put("/crypto_exchange_show/:id", async(request, response) => {
    crypto_exchange[request.params.id] = {...crypto_exchange[request.params.id],...request.body}; 
    response.redirect("/"); //redirect to the index page
  });

// create route - (POST) - CREATES/POSTS a a crypto exchange instance
router.post("/crypto_exchange_show", async(request, response) => {
    crypto_exchange.push(request.body);
    response.redirect("/");
  });

// crypto bitcoin for coin/token (Show) display route
router.get("/crypto_bitcoin_show", async(request, response)=>{
    response.render('crypto_bitcoin_show.ejs', {bitcoin: bitcoin})
})

// crypto bitcoin for individual bitcoin instance for coin/token (Show) display route
router.get("/crypto_bitcoin_show/:id", async(request, response)=>{
    response.render('crypto_bitcoin_show_2.ejs', {bitcoin: bitcoin[request.params.id], id: request.params.id})
})

// Destroy ROUTE - (DELETE) - DELETES ONE crypto bitcoin data instance
router.delete("/crypto_bitcoin_show/:id", async(request, response) => {
    bitcoin.splice(request.params.id, 1); //remove the item from the array
    response.redirect("/"); //redirect back to index route
  });

// (EDIT) Route for editing crypto bitcoin instance information
router.get("/crypto_bitcoin_edit/:id", async(request, response)=> {
    response.render("crypto_bitcoin_edit.ejs", {bitcoin: bitcoin[request.params.id], id: request.params.id})
})

// (UPDATE) ROUTE - PUT - updates a bitcoin instance --> adds to the edit page
router.put("/crypto_bitcoin_show/:id", async(request, response) => {
    //:id is the index of our pokemons array that we want to change
    bitcoin[request.params.id] = {...bitcoin[request.params.id],...request.body}; //in our pokemons array, find the index that is specified in the url (:id).  Set that element to the value of req.body (the input data)
    response.redirect("/"); //redirect to the index page
  });

// create route - (POST) - CREATES/POSTS a a crypto bitcoin instance
router.post("/crypto_bitcoin_show", async(request, response) => {
    bitcoin.push(request.body);
    response.redirect("/");
  });

// ethereum bitcoin for coin/token (Show) display route
router.get("/crypto_ethereum_show", async(request, response)=>{
    response.render('crypto_ethereum_show.ejs', {ethereum: ethereum})
})

// crypto ethereum for individual ethereum instance for coin/token (Show) display route
router.get("/crypto_ethereum_show/:id", async(request, response)=>{
    response.render('crypto_ethereum_show_2.ejs', {ethereum: ethereum[request.params.id], id: request.params.id})
})

// Destroy ROUTE - (DELETE) - DELETES ONE crypto ethereum data instance
router.delete("/crypto_ethereum_show/:id", async(request, response) => {
    ethereum.splice(request.params.id, 1); //remove the item from the array
    response.redirect("/"); //redirect back to index route
  });

// (EDIT) Route for editing crypto ethereum instance information
router.get("/crypto_ethereum_edit/:id", async(request, response)=> {
    response.render("crypto_ethereum_edit.ejs", {ethereum: ethereum[request.params.id], id: request.params.id})
})

// (UPDATE) ROUTE - PUT - updates a ethereum instance --> adds to the edit page
router.put("/crypto_ethereum_show/:id", async(request, response) => {
    ethereum[request.params.id] = {...ethereum[request.params.id],...request.body}; 
    response.redirect("/"); //redirect to the index page
  });

// create route - (POST) - CREATES/POSTS a a crypto ethereum instance
router.post("/crypto_ethereum_show", async(request, response) => {
    ethereum.push(request.body);
    response.redirect("/");
  });


//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;