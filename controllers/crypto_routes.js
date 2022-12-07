/// creating dependencies and libraries
const express = require("express");
const bcrypt = require("bcryptjs");
/// connecting to the Database Model Schema extracted from the Mongoose Database
const bitcoin = require("../models/bitcoin.js");
const crypto_exchange = require("../models/crypto_exchange.js");
const ethereum = require("../models/ethereum.js");
const { request } = require("http");
const { response } = require("express");

// creating Mongoose Database and establishing connections without errors
const mongoose = require("mongoose");
const DB_URL = process.env.PORT
const configuration = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
mongoose.connection.on("open", ()=> {console.log("Connection has been established")})
  .on("close", ()=>{console.log("Connection has been disconnected/destroyed")})
  .on("error", (error)=>{console.log(`There has been an error that has occurred which is ${error}`)})
  
// creating router 
const router = express.Router();

///////////////////////////////
/// Animal User Display Routes
///////////////////////////////

// connect to Mongo Database
mongoose.connect(DB_URL, configuration)

// home route, checking if server is running
router.get("/", (request, response) => {
    response.send("Your server is running...")
})

// Error Handler
function errorHandler(error, res){
    res.json(error)
}

// Seed Router
router.get("/seed", (req, res) => {

const startingcrypto_exchange = [
    { crypto_exchange_id: 1, 
    bitcoin_id: 1,
 ethereum_id: 2, purchase_status: true, 
 sell_status: false},
 { crypto_exchange_id: 2, 
    bitcoin_id: 2,
 ethereum_id: null, purchase_status: false, 
 sell_status: true},
 { crypto_exchange_id: 3, 
    bitcoin_id: null,
 ethereum_id: 2, purchase_status: true, 
 sell_status: false}
]

const ethereum = [
    { ethereum_id: 1,
 ethereum_blockchain_hash_id: "0xb4bc263278d3ф82a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26d",
 ethereum_price: 140.58},
 { ethereum_id: 2,
    ethereum_blockchain_hash_id: "0xb4bc2490!8d3ф82a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26d",
    ethereum_price: 190.58}]

const bitcoin = [
        { bitcoin_id: 1,
     bitcoin_blockchain_hash_id: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",
     bitcoin_price: 1220.58},
     { bitcoin_id: 2,
        bitcoin_blockchain_hash_id: "a1083db53e416d8fa10er23b7094a21e5b9890e16c5cf532fc90e4d8fbf5d48d",
        bitcoin_price: 1910.11}]

    //Delete all seed data and create new object with new seed data
    crypto_exchange.deleteMany({}, (err, data) => {
        //Create new crypto_exchange once old ones are deleted
        crypto_exchange.create(startingcrypto_exchange, (err, data) => {
            res.json(data)
        } )
    })

    ethereum_data.deleteMany({}, (err, data) => {
        //Create new ethereum once old ones are deleted
        ethereum_data.create(ethereum, (err, data) => {
            res.json(data)
        } )
    })

    bitcoin_data.deleteMany({}, (err, data) => {
        //Create new bitcoin once old ones are deleted
        bitcoin_data.create(bitcoin, (err, data) => {
            res.json(data)
        } )
    })
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router