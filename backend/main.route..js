import { Router } from 'express';
import { register, login, logOut, updateProfile, getUserByName } from "./controllers/user.controller.js";
import { registerCompany,getCompany, getCompanyById, updateCompany } from './controllers/company.controller.js';
import isAuthenticated from './middlewares/isAuthenticated.js';

const router = Router();

// -----------------------------User-------------------------------
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logOut)
router.put("/profile/update", isAuthenticated, updateProfile)
router.get("/user/:name", getUserByName)


// ----------------------------Company----------------------------
router.post("/registerCompany",isAuthenticated, registerCompany)
router.get("/companyByUserId",isAuthenticated, getCompany)
router.get("/companyByCompanyId/:id",isAuthenticated, getCompanyById)
router.put("/companyUpdate/:id",isAuthenticated,updateCompany)



export default router;
