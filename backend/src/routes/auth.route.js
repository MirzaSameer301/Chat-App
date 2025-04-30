import express from 'express';
import { chechAuth, loginUser, logoutUser, RegisterUser, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup',RegisterUser);
router.post('/login',loginUser);
router.post('/logout',logoutUser);
router.put("/update-profile",protectRoute,updateProfile);
router.get("/check",protectRoute,chechAuth);

export default router;