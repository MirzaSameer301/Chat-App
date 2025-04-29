import express from 'express';
import { loginUser, logoutUser, RegisterUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup',RegisterUser);
router.post('/login',loginUser);
router.post('/logout',logoutUser);

export default router;