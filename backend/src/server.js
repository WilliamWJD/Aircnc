const express=require('express');
require('dotenv').config();

const app=express()

const port=process.env.PORT_SERVER;

app.listen(port,()=>{
    console.log('Sservidor online')
})

