import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongodb.config.js';
import urlSchema from './src/model/shortUrlSchema.model.js';
import short_url from "./src/routes/shortUrl.route.js"
import { redirectToLongUrl } from './src/controllers/shortUrl.controllers.js';
import cors from 'cors';

dotenv.config("./.env");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/create', short_url);

app.get('/:id', redirectToLongUrl)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the URL Shortener API' });
});

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});