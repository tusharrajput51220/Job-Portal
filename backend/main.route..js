import express from "express"
import { Router } from 'express';
import { register, login, logOut, updateProfile, getUserByName } from "./controllers/user.controller.js";
import { registerCompany,getCompany, getCompanyById, updateCompany } from './controllers/company.controller.js';
import { postJob, getAllJobs, getJobById, getAdminJobs } from "./controllers/job.controller.js";
import isAuthenticated from './middlewares/isAuthenticated.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "./controllers/application.controller.js";

const router = Router();
const app=express()
// app.use(isAuthenticated)

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

// ----------------------------Job----------------------------
router.post("/registerJob",isAuthenticated, postJob)
router.get("/allJobs",isAuthenticated, getAllJobs)
router.get("/jobById/:id",isAuthenticated, getJobById)
router.get("/adminJob",isAuthenticated,getAdminJobs)

// ----------------------------Job----------------------------
router.post("/apply/:id",isAuthenticated, applyJob)
router.get("/getJobs",isAuthenticated, getAppliedJobs)
router.get("/:id/applicants",isAuthenticated, getApplicants)
router.put("/status/:id/update",isAuthenticated,updateStatus)



export default router;
