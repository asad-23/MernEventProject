import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import messageRouters from './routers/messageRouters.js'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();

dotenv.config({
    path: './config/config.env'
});


app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["POST"]
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true })); //For cheeking data which is given by client

app.use('/api/v1/message', messageRouters)

dbConnection();

export default app