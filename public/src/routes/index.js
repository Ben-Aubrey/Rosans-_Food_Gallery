const express = require('express')
const router = express.Router()
require('dotenv').config
const db = require('../services/database')

router.get('/', async(req, res) => {  // root route or home route
    try {
        // load up some documents
        const service_Tab = await db.find('index_service_cards', {})
                
        // render loads up an ejs file
        res.render('index', {
            title: 'Home - Rosan\'s Food Gallery',
            service_Tab
        })
    } catch (error) {
        console.error(error)
    } finally {
        // db.close()
    }    
})

router.get('/menu', async(req, res) => {  // menu route
    try {
        // load up some documents
        const breakFast = await db.find('index_breakfast_menu', {})
        const drinks = await db.find('index_drinks_menu', {})
        const local = await db.find('index_local_menu', {})
        const continental = await db.find('index_continental_menu', {})

        // render loads up an ejs file
        res.render('menu', {
            title: 'Menu - Rosan\'s Food Gallery',
            breakFast,
            drinks,
            local,
            continental
        })
    } catch (error) {
        console.error(error)
    } finally {
        // db.close()
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
        console.error(error)
    }
})

module.exports = router
