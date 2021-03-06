const http =require('http')
const express = require('express')
const route = require('./routes')
const app = express()
const PORT = process.env.PORT || 4000
const session = require('express-session')


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'pair project',
    resave: false,
    saveUninitialized: true,
}))

app.use('/', route)

app.listen(PORT, () => {
    console.log('App running on port', PORT);
})