const express= require ("express")
const cors=require("cors")
const mongoose=require ("mongoose")

const app=express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://7f7pvmx:salam123salam@cluster0.dhgcukn.mongodb.net/").then(()=>{
    console.log("db connected")
})


const cardSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    ,
    price:{
        type:Number,
        required:true
    }
})
const cardModel=mongoose.model("cardModel",cardSchema)

//get
app.get("/products",async (req,res)=>{

    const data=await cardModel.find()
    res.send(data)

})



//get all
app.get("/products/:id",async (req,res)=>{
    const {id}=req.params
const target=await cardModel.findById(id)
    res.send(target)

})


//post
app.post("/products",async(req,res)=>{
    const newCard=new cardModel({
        ...req.body
    })
    await newCard.save()
    res.send(newCard)
})


//delete
app.delete("/products/:id",async (req,res)=>{
    const {id}=req.params
    await cardModel.findByIdAndDelete(id)
    res.send("item deleted")
})

app.listen(8080,()=>{
    console.log("app running on 8080")
})