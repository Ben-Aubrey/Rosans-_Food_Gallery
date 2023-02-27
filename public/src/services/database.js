require('dotenv').config()
const { MongoClient } = require('mongodb')

class Database {
    constructor() {
        const uri = process.env.MONGODB_URI   // connection uri
        const dbName = process.env.DATABASE_NAME
        this.client = new MongoClient(uri, { useNewUrlParser: true });
        this.db = null
    }

    async connect() {
        try {
            await this.client.connect()
            this.db = this.client.db(process.env.DATABASE_NAME)
            console.log('Successfully connected to the database')
        } catch (error) {
            console.log(error)
        }
    }
    
    async insertOne(collectionName, data) {
        try {
            const collection = this.db.collection(collectionName)
            const result = await collection.insertOne(data)
            return result
        } catch (error) {
            console.log(error)
        }
    }
    
    async updateOne(collectionName, filter, update) {
        try {
            const collection = this.db.collection(collectionName)
            const result = await collection.updateOne(filter, { $set: update })
            return result
        } catch (error) {
            console.log(error)
        }
    }
    
    async deleteOne(collectionName, filter) {
        try {
            const collection = this.db.collection(collectionName)
            const result = await collection.deleteOne(filter)
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async find(collectionName, filter) {
        try {
            const collection = this.db.collection(collectionName)
            const result = await collection.find(filter).toArray()
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async close() {
        try {
            await this.client.close()
            console.log('Successfully disconnected from the database')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Database();

