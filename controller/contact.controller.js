import Contact from "../models/contact_model.js";

export const getContacts =async(req, res) => {
 
const contacts = await Contact.find(); 
// res.json(contacts);

 res.render('home.ejs', {contacts})
  // const contacts = await Contac
 

 
}

export const showContact =async (req, res) => {
  const contact = await Contact.findOne({_id: req.params.id});
 // res.json(contact);
 res.render('show-contact' ,{contact} )

}

export const addContactPage =(req, res) => {
  res.render('add-contact')
}

export const addContact = async(req, res) => {
  
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
  
  const contact = await Contact.findOne({_id: req.params.id});
res.render('update-contact', {contact})



}


export const DeleteContact =async(req, res)=>{
  await Contact.findByIdAndDelete( req.params.id)
   res.redirect("/");
}




export const UpdateContact=async(req, res) => {
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