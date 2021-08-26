const express = require('express')
const mongoose = require('mongoose')
const app =express()
const shortUrl = require('./model/shortUrl')

const url = 'mongodb://localhost/UrlShortener'

const home = require('./routes/homepage')
const submit = require('./routes/shortUrl')

//connect to mongodb
mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection
con.on('open',() =>{
    console.log("connected...")
})

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))


app.get('/:shortUrl',async (req,res) => {
    
   let newUrl = await shortUrl.findOne({shortUrl : req.params.shortUrl})

    if(newUrl==null)
    return res.sendStatus(404)

    else{
    newUrl.clicks++
    newUrl.save()
    res.redirect(newUrl.fullUrl)}
  })




app.use('/',home)
app.use('/shortUrl',submit)

app.listen(process.env.PORT || 3000)
