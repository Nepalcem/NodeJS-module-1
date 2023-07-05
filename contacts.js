const path = require("path");
const fs = require("fs").promises;

const listContacts = async () => {
  try {
    const contactsPath = path.join("db", "contacts.json");
    const readResult = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(readResult);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contactsArray = await listContacts();
    const element = contactsArray.find((el) => el.id === contactId);
    if (!element) {
      return null;
    }
    console.log(element);
    return element;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  const contactsArray = await listContacts();
  const element = contactsArray.find((el) => el.id === contactId);
  if (!element) {
    return null;
  }
  // console.log(element);
  const indexOfElement = contactsArray.indexOf(element);
  const deletedElement = contactsArray.splice(indexOfElement, 1);

  const contactsPath = path.join("db", "contacts.json");
  fs.writeFile(contactsPath, JSON.stringify(contactsArray), "utf8");
  return deletedElement;
};

removeContact("AeHIrLTr6JkxGE6SN-0Rw");
