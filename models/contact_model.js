import mongoose from 'mongoose'

const contactSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
})
const contact= mongoose.model('contact', contactSchema);

export default contact;
