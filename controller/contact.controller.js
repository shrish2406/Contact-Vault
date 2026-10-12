import Contact from "../models/contact_model.js";
import mongoose from "mongoose";

export const getContacts =async(req, res) => {
const contacts = await Contact.find(); 
 res.render('home', {contacts})
}


export const showContact =async (req, res) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render('404', { message: 'Invalid contact ID' });
  }

try {
const contact = await Contact.findOne({_id: req.params.id});
if (!contact) {
  return res.render('404', { message: 'Contact not found' });
}
 res.render('show-contact' ,{contact} )
}catch (error) {
  console.error(error);
  res.render('500', { message: error });
}
}

export const addContactPage =(req, res) => {
  res.render('add-contact')
}

export const addContact = async(req, res) => {
   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render('404', { message: 'Invalid contact ID' });
  }
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

}

export const UpdateContactPage = async(req, res) => {
   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render('404', { message: 'Invalid contact ID' });
  }
  const contact = await Contact.findOne({_id: req.params.id});
res.render('update-contact', {contact})



}


export const DeleteContact =async(req, res)=>{
   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render('404', { message: 'Invalid contact ID' });
  }
  await Contact.findByIdAndDelete( req.params.id)
   res.redirect("/");
}




export const UpdateContact=async(req, res) => {
  
   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render('404', { message: 'Invalid contact ID' });
  }
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
}