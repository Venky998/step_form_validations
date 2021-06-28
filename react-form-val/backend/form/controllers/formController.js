import appliedForms from "../models/formModel"

export const formAdd = async(req,res)=>{
    const addForm = new appliedForms({
        email :req.body.email ,
        username:req.body.username ,
        password:req.body.password ,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        mobile:req.body.mobile,
        address:req.body.address,
        pincode:req.body.pincode
    })

    await addForm.save()
    .then(rep=>
        res.status(200).json({"data add successfully":rep})
        )
    .catch(err=>
        res.status().json({"data add error":err})
        )
}

export const formGet = async(req,res)=>{
        
        try {
            const getForm = await appliedForms.find()
            return res.status(200).send(getForm)
        } catch (error) {
            return res.status(400).json({"Data error":error})
        }
}