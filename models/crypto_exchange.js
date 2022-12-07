// create library/packages dependencies and express 
const { builtinModules } = require("module");
const mongoose = require("./connection");

// extracting schemas and models from mongoose database
const { Schema, model } = mongoose

// making Database/Data Schema for cryptocurrencies
const crypto_exchange_schema = new Schema({
    crypto_exchange_id: Number,
    bitcoin_id: Number,
    ethereum_id: Number,
    purchase_status: Boolean,
    sell_status: Boolean
})

const crypto_exchange = model('crypto_exchange', crypto_exchange_schema)

module.exports = crypto_exchange