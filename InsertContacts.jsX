const mongoose = require('./Database');
const Contact = require('./models/Contact');

const contacts = [
  { lastName: 'Ben Lahmer', firstName: 'Fares', email: 'fares@gmail.com', age: 26 },
  { lastName: 'Kefi', firstName: 'Seif', email: 'kefi@gmail.com', age: 15 },
  { lastName: 'Fatnassi', firstName: 'Sarra', email: 'sarra.f@gmail.com', age: 40 },
  { lastName: 'Ben Yahia', firstName: 'Rym', age: 4 },
  { lastName: 'Cherif', firstName: 'Sami', age: 3 },
];

const InsertContacts = async () => {
  try {
    await Contact.insertMany(contacts);
    console.log('Contacts inserted');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting contacts:', err);
  }
};

InsertContacts();