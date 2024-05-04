const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;



