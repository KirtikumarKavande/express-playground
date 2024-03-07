const express=require('express')
const product = require('../../../controllers/product')
const router=express.Router()
router.get('/product',product)

module.exports=router

