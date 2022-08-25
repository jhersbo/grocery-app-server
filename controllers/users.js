const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { users, items } = db


//login verification

router.get('/', async (req, res)=>{
    try{
        const foundUser = await users.findAll({
            where:{
                username: req.body.username,
                password: req.body.password
            }
        })
        res.status(200).json(foundUser)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router