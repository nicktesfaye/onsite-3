const express = require('express')
const router = express.Router()
const shortUrl = require('../model/shortUrl')


router.get('/',async (req,res) => {
    const users = await shortUrl.find()
    res.render('index',{shortUrl:users})
    })

    module.exports =router