import express from 'express';
import dotenv from 'dotenv';
import { ConnectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import cookieParser from 'cookie-parser';
import { app,server } from './lib/socket.js';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 5002; 

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true,
}))

app.use('/api/auth', authRoutes); 
app.use('/api/messages', messageRoutes);

server.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}`);
  ConnectDB();
});