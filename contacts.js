const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.join("db", "contacts.json");

const listContacts = async () => {
  try {
    const readResult = await fs.readFile(contactsPath);
    console.table(JSON.parse(readResult));
    return JSON.parse(readResult);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contactsArray = await listContacts();
    const element = contactsArray.find((el) => el.id === contactId);
    console.log(element || null);
    return element || null;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  const contactsArray = await listContacts();
  const element = contactsArray.find((el) => el.id === contactId);

  console.log(element || null);
  if (!element) {
    return null;
  }
  const indexOfElement = contactsArray.indexOf(element);
  const deletedElement = contactsArray.splice(indexOfElement, 1);

  await fs.writeFile(contactsPath, JSON.stringify(contactsArray, null, 2));
  return deletedElement;
};

const addContact = async (data) => {
  const contactsArray = await listContacts();
  const { nanoid } = await import("nanoid");
  const newContact = {
    id: nanoid(),
    ...data,
  };
  const newContactsArray = [...contactsArray, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newContactsArray, null, 2));
  console.log(newContact);
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
