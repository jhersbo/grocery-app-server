const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { items, users } = db


//get all items stored for client filtering
router.get('/', async(req, res)=>{
    try{
        const foundList = await items.findAll()
        res.status(200).json(foundList)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:user_id', async(req, res)=>{
    try{
        const foundList = await items.findAll({
            where:{
                user_id: req.params.user_id
            }
        })
        res.status(200).json(foundList)
    }catch(err){
        res.status(500).json(err)
    }
})

//create items 
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