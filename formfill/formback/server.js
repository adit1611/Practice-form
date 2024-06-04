const express = require('express')
const mongoose= require('mongoose')
const cors= require('cors')

const Port = 5000

const app = express()



//middleware
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/entydata")

const db=mongoose.connection;
db.on('error',(err)=>{
     console.error("mongo connection error",err);
})
db.once('open',() => {
    console.log('mongo is conneccted');
})

const entrybase = new mongoose.Schema({
    name:String,
    email:String
})

const entrydata = mongoose.model('entrydata', entrybase)

app.post('/detail' , async(req,res) => {
    try {
        const newUser = new entrydata({
            name:req.body.name,
            email: req.body.email,
        });
            const savedData = await newUser.save()
            res.status(201).json(savedData)
    } catch (error) {
            console.log('Error data');
            res.status(500).json({error:"inter server error"})
    }
})

app.listen(Port);
