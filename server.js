import express from 'express';

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import eventRouter from './routes/event.routes.js';
import participantRouter from './routes/participant.routes.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/events",eventRouter);
app.use("/api/participants",participantRouter)


mongoose.connect(process.env.DB_URL)
    .then((res) => {
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
            console.log("Connected to MongoDB")
        });
        
    }).catch((err)=>{
        console.log(err);
    });