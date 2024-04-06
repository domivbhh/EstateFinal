import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/usersRoutes.js'
import authRoutes from './routes/authroutes.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>(console.log('DB Connected Successfully'))).catch((err)=>console.log(err))


const app=express()

app.use(express.json())

app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})


app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)