import User from '../models/UserModel.js'
import bcryptjs from 'bcryptjs'

export const signUp=async (req,res)=>{
    const{username,password,email}=req.body
    const hashedPassword=bcryptjs.hashSync(password,10)
    const user=new User({username,email,password:hashedPassword})
    try{
    await user.save()
    res.status(201).json({message:'User Created Successfully'});
    }
    catch(err){
        res.status(500).json(err.message)
    }


}


export const signIn=(req,res)=>{

}