const express = require('express')
const mongoose = require('mongoose')
const app =express()

const url = 'mongodb://localhost/UrlShortener'

const home = require('./routes/homepage')
const submit = require('./routes/shortUrl')
const newUrl = require('./routes/newUrl')

//connect to mongodb
mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection
con.on('open',() =>{
    console.log("connected...")
})

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))



app.use('/',home)
app.use('/shortUrl',submit)
app.use('/:shortUrl',newUrl)


app.listen(process.env.PORT || 3000)