import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Contact from "./models/contact_model.js"
//const Contact = requries("contact");

app.use (express.urlencoded({extended: false}))


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

app.get("/", async(req, res) => {
 
const contacts = await Contact.find(); 
// res.json(contacts);

 res.render('home.ejs', {contacts})
  // const contacts = await Contac
 

 
})

app.get("/show-contact/:id",async (req, res) => {
  const contact = await Contact.findOne({_id: req.params.id});
 // res.json(contact);
 res.render('show-contact' ,{contact} )

})


app.get("/add-contact", (req, res) => {
  res.render('add-contact')



})

app.post("/add-contact", async(req, res) => {
  
  const contact = await Contact.insertOne(
    {
      FirstName: req.body.first_name,
  LastName:req.body.last_name ,
  email: req.body.email,
  phone: req.body.phone ,
  address: req.body.address, 

    }
  
    
  );
  res.redirect("/")

})

app.get("/update-contact/:id", async(req, res) => {
  
  const contact = await Contact.findOne({_id: req.params.id});
res.render('update-contact', {contact})



})


app.post("/update-contact/:id", async(req, res) => {
const contact = await Contact.findByIdAndUpdate(
  req.params.id,
    {
      FirstName: req.body.first_name,
  LastName:req.body.last_name ,
  email: req.body.email,
  phone: req.body.phone ,
  address: req.body.address, 

    }
  
    
  );
  res.redirect("/")
})

app.get("/delete-contact/:id", async(req, res)=>{
  await Contact.findByIdAndDelete( req.params.id)
   res.redirect("/");
})








app.listen(5050, () => {
  console.log("Server is running on port 5050");
})