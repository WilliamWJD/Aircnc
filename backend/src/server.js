const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()

const routes=require('./routes')

mongoose.connect(`${process.env.DB_CONNECT}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const app=express()

app.use(cors())
app.use(express.json())
app.use(routes)

const port=process.env.PORT_SERVER

app.listen(port,()=>{
    console.log('Servidor online')
})

