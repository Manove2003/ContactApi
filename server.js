const express =require('express');
const errorHandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbConnection');
const app=express(); 
const dotenv =require("dotenv").config();
const port=process.env.PORT ||5000;

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/usersRoutes"));
connectDb();
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})