const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.join("db", "contacts.json");

const listContacts = async () => {
  try {
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

  await fs.writeFile(contactsPath, JSON.stringify(contactsArray), "utf8");
  return deletedElement;
};

const addContact = async (name, email, phone) => {
  const contactsArray = await listContacts();
  const { nanoid } = await import("nanoid");
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  const newContactsArray = [...contactsArray, newContact];
  console.log(newContactsArray);
  await fs.writeFile(contactsPath, JSON.stringify(newContactsArray), "utf8");
  return newContact;
};

// addContact('test', 'test@test.com', "(692) 802-2949");
