import express from 'express'
import { getAllUrlsController } from '../controllers/user.controllers.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/getAllUrls", authMiddleware, getAllUrlsController);
export default router;