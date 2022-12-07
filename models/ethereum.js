// create library/packages dependencies and express 
const { text } = require("body-parser");
const { builtinModules } = require("module");
const mongoose = require("./connection");

// extracting schemas and models from mongoose database
const { Schema, model } = mongoose

// making Database/Data Schema for cryptocurrencies
const ethereum_schema = new Schema({
    ethereum_id: Number,
    ethereum_blockchain_num: Text,
    ethereum_price: Number
})

const crypto_ethereum = model('crypto_ethereum', ethereum_schema)

module.exports = crypto_ethereum