require('dotenv').config()
const mongoose = ('./connection')
const crypto_exchange = require('./crypto_exchange')
const ethereum_data = require('./ethereum')
const bitcoin_data = require('./bitcoin')

mongoose.connection.on('open', () => {
    //Data that we want to display
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
        crypto_exchange.add(startingcrypto_exchange, (err, data) => {
            console.log(data)
        } )
    })

    ethereum_data.deleteMany({}, (err, data) => {
        //Create new ethereum once old ones are deleted
        ethereum_data.add(ethereum, (err, data) => {
            console.log(data)
        } )
    })

    bitcoin_data.deleteMany({}, (err, data) => {
        //Create new bitcoin once old ones are deleted
        bitcoin_data.add(bitcoin, (err, data) => {
            console.log(data)
        } )
    })


})