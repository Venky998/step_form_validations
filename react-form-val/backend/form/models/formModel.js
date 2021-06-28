import mongoose from 'mongoose'

const formData = new mongoose.Schema({
    email:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    mobile:{
        type:String
    },
    address:{
        type:String
    },
    pincode:{
        type:String
    }
})

const appliedForms = mongoose.model("Forms",formData)

export default appliedForms