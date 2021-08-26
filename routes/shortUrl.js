const express = require('express')
const router = express.Router()
const shortUrl = require('../model/shortUrl')


router.get('/',async(req,res) => {
    try{
       const users = await shortUrl.find()
       res.send(users)
    } catch(err)
    {
        res.send('Error '+err)
   }
})

router.post('/',async(req,res)=>{
 
    const user = new shortUrl({fullUrl: req.body.fullUrl})
    try{
        await user.save()
    }catch(err)
    {
        res.render("error")
    }
    res.redirect('/')

})

module.exports =router