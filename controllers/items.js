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

router.post('/', async (req, res)=>{
    try{
        items.create(req.body)
        res.status(200).json('Item Created')
    }catch(err){
        res.status(500).json("Item creation failed.", err)
    }
})

router.put('/', async(req, res)=>{
    try{
        await items.update(req.body, {
            where: {
                item_id: req.body.item_id
            }
        })
        res.status(200).json(`Successfully edited item's data.`)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete('/', async (req, res)=>{
    try{
        await items.destroy({
            where: {
                item_id: req.body.item_id
            }
        })
        res.status(200).json("Posting deleted.")
    }catch(err){
        res.status(500).json(err)
    }
})




module.exports = router