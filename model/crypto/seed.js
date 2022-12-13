require('dotenv').config()
const mongoose = require('./connection')
const crypto_exchange = require('./crypto_exchange')

mongoose.connection.on('open', () => {
    //Data that we want to display
    const startingcrypto_exchange = [{ crypto_exchange_id: 1, 
        bitcoin_id: 1, ethereum_id: null,
        crypto_exchange_name: "binance",
        bitcoin_amount: 1.5, ethereum_amount: null,
        bitcoin_circulating_supply: 1500000, ethereum_circulating_supply: 800321,
        blockchain_sending_transaction_hash_id_num: "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
        blockchain_receiving_transaction_hash_id_num: "a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d",   
        purchase_order_status: true, sell_order_status: false, 
        transaction_processing_status: false, transaction_complete_status: true, transaction_incomplete_status: false,
        transaction_date: new Date("2022-05-04")
    },
    { crypto_exchange_id: 2, 
        bitcoin_id: null, ethereum_id: 2,
        crypto_exchange_name: "etoro",
        bitcoin_amount: null, ethereum_amount: 0.09821,
        bitcoin_circulating_supply: 9843284, ethereum_circulating_supply: 12982341,
        blockchain_sending_transaction_hash_id_num: "0xb4bc263278d3ф82a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26d",
        blockchain_receiving_transaction_hash_id_num: "a1902dgba3e416d8cr188y11jb01sa21e5b2645e16c5tr666fc10efd8fbf5d48d",   
        purchase_order_status: false, sell_order_status: true, 
        transaction_processing_status: false, transaction_complete_status: true, transaction_incomplete_status: false,
        transaction_date: new Date("2021-01-11")
    },
    { crypto_exchange_id: 3, 
        bitcoin_id: 1, ethereum_id: 2,
        crypto_exchange_name:"uphold",
        bitcoin_amount: 1.2, ethereum_amount: 0.764,
        bitcoin_circulating_supply: 9234312, ethereum_circulating_supply: 230098741,
        blockchain_sending_transaction_hash_id_num: "0xb4bc263278e45eu872a2a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a7436asd2",
        blockchain_receiving_transaction_hash_id_num: "e9980df343e418d8cyr58y11jb01sa21e5br6455e16c5tr666fc10efd8fbfg4ert21",   
        purchase_order_status: false, sell_order_status: false, 
        transaction_processing_status: false, transaction_complete_status: false, transaction_incomplete_status: true,
        transaction_date: new Date("2022-03-25")
    }]

//Delete all seed data and create new object with new seed data
    crypto_exchange.deleteMany({}, (err, data) => {
        //Create new crypto_exchange once old ones are deleted
        crypto_exchange.add(startingcrypto_exchange, (err, data) => {
            console.log(data)
        })
    })
})

