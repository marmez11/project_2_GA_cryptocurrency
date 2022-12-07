// create library/packages dependencies and express 
const { text } = require("body-parser");
const { builtinModules } = require("module");
const mongoose = require("./connection");

// extracting schemas and models from mongoose database
const { Schema, model } = mongoose

// making Database/Data Schema for cryptocurrencies
const bitcoin_schema = new Schema({
    bitcoin_id: Number,
    bitcoin_blockchain_num: Text,
    bitcoin_price: Number
})

const crypto_bitcoin = model('crypto_bitcoin', bitcoin_schema)

module.exports = crypto_bitcoin