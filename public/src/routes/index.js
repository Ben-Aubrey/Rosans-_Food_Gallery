const express = require('express')
const router = express.Router()
const services = require('../services/database')

router.get('/', async(req, res) => {  // root route or home route
    try {
        // load up some documents
        const service_Tab = await services.getDB().collection('index_service_cards').find({}).toArray()
                
        // render loads up an ejs file
        res.render('index', {
            title: 'Home - Rosan\'s Food Gallery',
            indexData: service_Tab
        })
    } catch (error) {
        // error message = next(error)
    }
})

router.get('/menu', async(req, res) => {  // menu route
    try {
        // load up some documents
        const breakfast = await services.getDB().collection('index_breakfast_menu').find({}).toArray()
        // const drinks = await services.getDB.collection('index_drinks_menu').find({}).toArray()
        // const local = await services.getDB.collection('index_local_menu').find({}).toArray()
        // const continental = await services.getDB.collection('index_continental_menu').find({}).toArray()

        // render loads up an ejs file
        res.render('menu', {
            title: 'Menu - Rosan\'s Food Gallery',
            breakfast,
            // drinks,
            // local,
            // continental
        })
    } catch (error) {
        // error message
    }
})

router.get('/contact', async(req, res) => {  // contact route
    try {
        // render loads up an ejs file
        res.render('contact', {
            title: 'Contact - Rosan\'s Food Gallery',
            // contactData: data
        })
    } catch (error) {
        // error message
    }
})

module.exports = router
