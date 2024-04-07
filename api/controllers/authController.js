import { error } from 'console'
import User from '../models/UserModel.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const signUp=async (req,res,next)=>{
    const{username,password,email}=req.body
    const hashedPassword=bcryptjs.hashSync(password,10)
    const user=new User({username,email,password:hashedPassword})
    try{
    await user.save()
    res.status(201).json({message:'User Created Successfully'});
    }
    catch(err){
        // res.status(500).json(err.message)
        next(error)
    }


}


export const signIn=async (req,res,next)=>{
    const {email,password}=req.body
    try{
        const validUser=await User.findOne({email});

        if(!validUser){
            return next(errorHandler(401,'Invalid Credentials'))
        }
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorHandler(401,'Invalid Credentials'))
        }
        const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        // console.log(token)
//Nalla note pannu
        const expiryDate=new Date(Date.now() + 3600000);
        const sendingData=await User.findOne({email}).select('-password')
        res.cookie('access_token',token,{httpOnly:true,expires:expiryDate}).status(200).json(sendingData)

//mela iruka linea nalla note pannu

    }
    catch(err){
        next(err)
    }

}