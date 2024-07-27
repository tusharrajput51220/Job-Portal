import { Router } from 'express';
import { register,login,logOut,updateProfile } from "../controllers/user.controller.js"
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router=Router()

router.post("/register", register)
router.get("/login", login)
// router.post("/logOut", logOut)
router.put("/profile/update",isAuthenticated, updateProfile)

export default router