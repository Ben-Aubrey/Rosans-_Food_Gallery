require('dotenv').config()
const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI   // connection uri
const client = new MongoClient(uri)   // creates a new MongoClient

module.exports.connectDB = async () => {
    await client.connect()   // connect the client to the server
    console.log('Successfully connected to Cluster')
}

module.exports.getDB = () => {
    return client.db(process.env.DATABASE_NAME)   // return Rosan database
}

module.exports.close = () => {
    return client.close()   // closes the client
}
