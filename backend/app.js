import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/mongodb.config.js';
import short_url from "./src/routes/shortUrl.route.js"
import auth_route from './src/routes/auth.route.js';
import user_route from "./src/routes/user.route.js"
import { redirectToLongUrl } from './src/controllers/shortUrl.controllers.js';
import cors from 'cors';
import cookieParser from 'cookie-parser'; 
import { attachUser } from './src/middleware/attachUser.middleware.js';

dotenv.config("./.env");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());
app.use(attachUser);

app.use('/api/create', short_url);
app.use('/api/auth', auth_route);
app.use('/api/user', user_route);
app.get('/:id', redirectToLongUrl)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the URL Shortener API' });
});

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});