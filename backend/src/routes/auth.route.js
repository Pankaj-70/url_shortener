import express from 'express';
import { register_user, login_user } from '../controllers/auth.controllers.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', register_user);
router.post('/login', authMiddleware, login_user);
export default router;      