const router = require('express').Router()
const db = require('../models')
const { lists, users } = db


//get all lists
router.get('/', async (req, res)=>{
    try{
        let allLists = await lists.findAll({})
        res.status(200).json(allLists)
    }catch(err){
        res.status(500).json(err)
    }
})

//create list
router.post('/', async (req, res)=>{
    try{
        await lists.create(req.body)
        res.status(200).json('List Created')
    }catch(err){
        res.status(500).json("List creation failed.", err)
    }
})


//list edits
router.post('/update', async (req, res)=>{
    try{
        await lists.update(req.body.list_arr, {
            where: {
                list_id: req.body.list_id
            }
        })
    }catch(err){
        res.status(500).json("List update failed.", err)
    }
})

//delete list
router.delete('/', async (req, res)=>{
    try{
        lists.destroy({
            where: {
                list_id: req.body.list_id
            }
        })
    }catch(err){
        res.status(500).json("List deletion failed.", err)
    }
})
module.exports = router