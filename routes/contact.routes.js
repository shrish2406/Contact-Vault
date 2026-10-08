import express from "express";
const router = express.Router();
import { getContacts, showContact, addContactPage, addContact, UpdateContactPage, UpdateContact, DeleteContact } from "../controller/contact.controller.js";


router.get("/", getContacts);

router.get("/show-contact/:id", showContact);


router.get("/add-contact",addContactPage) 

router.post("/add-contact",addContact)

router.get("/update-contact/:id", UpdateContactPage)

router.post("/update-contact/:id", UpdateContact)

router.get("/delete-contact/:id", async(req, res)=>{
  await Contact.findByIdAndDelete( req.params.id)
   res.redirect("/");
})
export default router;