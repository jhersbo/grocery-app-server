const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { users, items } = db

module.exports = router