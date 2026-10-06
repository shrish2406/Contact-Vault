import express from "express";
const app = express();

//middleware
app.set("view engine", 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render('home.ejs')
 
})

app.get("/show-contact", (req, res) => {
  res.render('show-contact')

})


app.get("/add-contact", (req, res) => {
  res.render('add-contact')
  


})

app.post("/add-contact", (req, res) => {

})

app.get("/update-contact", (req, res) => {
res.render('update-contact')
})

app.get("/delete_contact", (req, res)=>{
   
})








app.listen(5050, () => {
  console.log("Server is running on port 5050");
})