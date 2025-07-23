import express from 'express';
import { register_user, login_user, logoutUser } from '../controllers/auth.controllers.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', register_user);
router.post('/login', login_user);
router.get('/currentuser', authMiddleware, (req, res) => {
    res.json(req.user);
});
router.get('/logout', authMiddleware, logoutUser);
export default router;