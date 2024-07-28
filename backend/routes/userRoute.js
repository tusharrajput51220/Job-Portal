import { Router } from 'express';
import { register, login, logOut, updateProfile, getUserByName } from "../controllers/user.controller.js";
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logOut)
router.put("/profile/update", isAuthenticated, updateProfile)
router.get("/user/:name", getUserByName)
// router.route("/register").post(register);
// router.route("/login").post(login);
// router.route("/logout").post(logOut);
// router.route("/profile").put(isAuthenticated, updateProfile);

export default router;
