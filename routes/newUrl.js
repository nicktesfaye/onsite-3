const express = require('express')
const router = express.Router()
const shortUrl = require('../model/shortUrl')

router.get('/',async (req,res) => {

    console.log(req.params)

   let newUrl = await shortUrl.findOne({shortUrl : req.params.shortUrl})

    if(newUrl==null)
    return res.sendStatus(404)

    else{
    newUrl.clicks++
    newUrl.save()
    res.redirect(newUrl.fullUrl)}
  })



    module.exports =router