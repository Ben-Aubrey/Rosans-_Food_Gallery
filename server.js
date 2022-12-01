const express = require('express')
const session = require('express-session')
// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')
const app = express()

// configure other parts of app
const router = require('./public/src/routes/index')
const connection = require('./public/src/services/database')
const path = require('path')
const port = process.env.PORT || 4000

// configure express
app.set('views', 'public/src/views')
app.set('view engine', 'ejs')
// app.use(cookieParser('keyboard cat'));
// app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    secret: 'secret123',
    saveUninitialized: true,
    resave: true,
    cookie: {maxAge: 60000}
}))

// look for statics first
app.use(express.static(path.join(__dirname, './public')));

// routes
app.use('/', router)

// database connection
connection.connectDB()
.then(app.listen(port, () => {
    console.log('Server listening on port: ' + port)
}))
