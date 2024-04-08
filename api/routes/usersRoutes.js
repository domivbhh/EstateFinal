import express from "express";
import {getAllUser, updateUser} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/",getAllUser);
router.post('/update/:id',verifyToken,updateUser)



export default router
