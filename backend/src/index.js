import express from 'express';
import dotenv from 'dotenv';
import { ConnectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;  

app.use(express.json());
app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}`);
  ConnectDB();
});