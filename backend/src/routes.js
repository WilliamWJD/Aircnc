const express=require('express')
const multer=require('multer')

const SessionController=require('./controllers/SessionController')
const SpotController=require('./controllers/SpotController')

const uploadConfig=require('./config/upload')

const routes=express.Router()

const upload=multer(uploadConfig)

routes.post('/user',SessionController.store)
routes.get('/user',SessionController.index)

routes.post('/spots',upload.single('thumbnail'),SpotController.store)

module.exports=routes