import express from 'express'
import mongoose from 'mongoose'
import {readdirSync} from 'fs'
import cors from 'cors' 
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(res=>{
    console.log("database connected succesfully")
}).catch(err=>console.log("Database not connect",err))


readdirSync("./form/routes").map((r)=> app.use("/api",require(`./form/routes/${r}`)))

const port = process.env.PORT || 8000
app.get("/ap",(req,res)=>{
    res.status(200).send("welcome to node rest")
})
app.listen(port,()=>console.log("Server ready to start  ",port))