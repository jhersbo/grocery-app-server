//Dependencies
const express = require('express')
const cors = require('cors')
const cookieSession = require('cookie-session')
const app = express()

// Environment and middleware
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieSession({
    name: 'session',
    keys: [ "asjhdjwbriueghfngn" ],
    maxAge: 24 * 60 * 60 * 1000
}))
app.use(cors({
    origin: "http://localhost:3001",
    credentials: true,
}))

//controllers
app.use('/users', require('./controllers/users'))
app.use('/items', require('./controllers/items'))
app.use('/lists', require('./controllers/lists'))

app.get('/', async (req, res)=>{
    try{
        res.send('Home')
    }
    catch(err){
        res.send(err)
        console.log(err)
    }
})

app.listen(process.env.PORT, ()=>{
    console.log(`Eyes on port ${process.env.PORT}.`)
})