import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import {connectDB} from "./config/database.js";
dotenv.config();
connectDB();
import Contact from "./models/contact_model.js"
//const Contact = requries("contact");
import ContactRoutes from "./routes/contact.routes.js";
app.use (express.urlencoded({extended: false}))

import { getContacts, showContact, addContactPage, addContact, UpdateContactPage, UpdateContact, DeleteContact } from "./controller/contact.controller.js"; 

//connect to database
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });






//middleware
app.set("view engine", 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));



//routes
app.use("/",ContactRoutes);








app.listen(5050, () => {
  console.log("Server is running on port 5050");
})