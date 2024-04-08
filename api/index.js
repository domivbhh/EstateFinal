import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/usersRoutes.js'
import authRoutes from './routes/authroutes.js'
import cookieParser from 'cookie-parser'


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>(console.log('DB Connected Successfully'))).catch((err)=>console.log(err))
const app=express()



app.use(express.json())

app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})

app.use(cookieParser())


app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        error:message,
        statusCode
    })
})