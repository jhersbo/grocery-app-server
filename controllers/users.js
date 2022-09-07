const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { users, items } = db

//bcrypt
const bcrypt = require('bcrypt')
const saltRounds = 10

const encryption = (password)=>{
    bcrypt.hash(password, saltRounds)
}


//retrieve all users 
router.get('/', async (req, res)=>{
    try{
        const foundUser = await users.findAll()
        res.status(200).json(foundUser)
    }catch(err){
        res.status(500).json(err)
    }
})

//add user account and hash password
router.post('/', (req, res)=>{
    bcrypt.hash(req.body.password, saltRounds, async (err, hash)=>{
        try{
            await users.create({
            user_id: req.body.user_id,
            name: req.body.name,
            username: req.body.username,
            password: hash
            })
            res.status(200).json('User created')
        }catch(err){
            res.status(500).json(err)
            console.log(err)
        }
    })
})

//password authentication
router.post('/auth', async (req, res)=>{
    await users.findOne({
        where: {
            user_id: req.body.user_id
        }
    }).then((user)=>{
        if(!user){
            res.status(204).json('No user found.')
        }else{
            bcrypt.compare(req.body.password, user.password, (err, result)=>{
                if(result){
                    res.status(200).json('User authenticated.')
                }else{
                    res.status(401).json('Incorrect password.')
                }
            })
        }
    })
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