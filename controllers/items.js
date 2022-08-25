const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { items, users } = db

// get users list from their id
router.get('/', async (req, res)=>{
    try{
        const foundList = await items.findOne({
            where:{
                user_id: req.body.user_id
            }
        })
        res.status(200).json(foundList)
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

//modify user's list [modification of the array will take place in the client. This functions merely to replace the array stored in the db.]






module.exports = router