const express=require("express")

const Demo = require("../Controller/Demo")
const ShowUser = require("../Controller/User")
const Object = require("../Controller/Object")
const router=express.Router()
router.route('/demo').get(Demo)


router.route('/user/:id').get(ShowUser)
router.route('/object').get(Object)





module.exports=router