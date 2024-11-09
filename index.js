import express from 'express' // we will use express to create our server or app
import dotenv from 'dotenv';  // calling dotenv to use the .env file
import db from './config/db'; 
import usersRoutes from './router/users.routes';
dotenv.config(); // dotenv is a package that allows us to use environment variables

const app = express(); // we are creating an instance of express

app.use(express.json()); // we are using express to parse json
  
const PORT = process.env.PORT || 3000// we are using the port from the .env file
app.use('/', usersRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}); 