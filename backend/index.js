//importing packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//app config
const app = express()
const port = process.env.PORT || 8000;

//middleware
app.use(express.json())
app.use(cors())

//Database config
const url = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PWD}@cluster0.h866c.mongodb.net/${process.env.USER_DB}?retryWrites=true&w=majority`;

mongoose.connect(url, ()=>console.log("Connected to the database"))

//api routes
app.get('/', (req,res)=>{

    res.send("Welcome to WhatsApp Clone Backend")
})

//app listen
app.listen(port,()=> console.log(`Listening to the port ${port}`))