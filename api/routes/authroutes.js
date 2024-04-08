import express from'express'
const router=express.Router()
import { signIn,signUp,google } from '../controllers/authController.js'

router.post('/signup',signUp)
router.post("/signin", signIn)
router.post("/goggle",google)





export default router