const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()

const routes=require('./routes')

mongoose.connect(`${process.env.DB_CONNECT}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const app=express()

app.use(express.json())
app.use(routes)

const port=process.env.PORT_SERVER

app.listen(port,()=>{
    console.log('Sservidor online')
})

