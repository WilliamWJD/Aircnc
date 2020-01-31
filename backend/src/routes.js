const express=require('express')
const multer=require('multer')

const SessionController=require('./controllers/SessionController')
const SpotController=require('./controllers/SpotController')
const DashbordController=require('./controllers/DashbordController')

const uploadConfig=require('./config/upload')

const routes=express.Router()

const upload=multer(uploadConfig)

routes.post('/user',SessionController.store)
routes.get('/user',SessionController.index)

routes.post('/spots',upload.single('thumbnail'),SpotController.store)
routes.get('/spots',SpotController.index)

routes.get('/dashbord',DashbordController.show)

module.exports=routes