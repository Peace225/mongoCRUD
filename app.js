const mongoose = require('./Database');
const Contact = require('./models/Contact');

// Lire tous les contacts
const readContacts = async () => {
  try {
    const contacts = await Contact.find();
    console.log('All contacts:', contacts);
  } catch (err) {
    console.error('Error reading contacts:', err);
  }
};

// Mettre à jour un contact
const updateContact = async (id, updateData) => {
  try {
    const contact = await Contact.findByIdAndUpdate(id, updateData, { new: true });
    console.log('Contact updated:', contact);
  } catch (err) {
    console.error('Error updating contact:', err);
  }
};

// Supprimer un contact
const deleteContact = async (id) => {
  try {
    await Contact.findByIdAndDelete(id);
    console.log('Contact deleted');
  } catch (err) {
    console.error('Error deleting contact:', err);
  }
};

// Exemple d'utilisation des fonctions CRUD
const run = async () => {
  await readContacts();
  
  // Remplacez l'ID par l'ID réel d'un document dans votre base de données
  const contactId = 'id_du_contact_à_mettre_à_jour';
  await updateContact(contactId, { age: 30 });

  await readContacts();

  // Remplacez l'ID par l'ID réel d'un document dans votre base de données
  const contactIdToDelete = 'id_du_contact_à_supprimer';
  await deleteContact(contactIdToDelete);

  await readContacts();

  mongoose.connection.close();
};

run();