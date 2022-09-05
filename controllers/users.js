const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { users, items } = db


//retrieve users 
router.get('/', async (req, res)=>{
    try{
        const foundUser = await users.findAll()
        res.status(200).json(foundUser)
    }catch(err){
        res.status(500).json(err)
    }
})

//add a user account
router.post('/', async (req, res)=>{
    try{
        users.create(req.body)
        res.status(200).json('User created')
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

//edit user information
router.put('/', async (req, res)=>{
    try{
        await users.update(req.body, {
            where:{
                user_id: req.body.user_id
            }
        })
        res.status(200).json(`Successfully edited user's data.`)
    }catch(err){
        res.status(500).json(err)
    }
})

//delete user
router.delete('/', async (req, res)=>{
    try{
        users.destroy({
            where: {
                user_id: req.body.user_id
            }
        })
        res.status(200).json("User deleted.")
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router