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
  const contactsArray = await listContacts();
  const element = contactsArray.find((el) => el.id === contactId);
  if (!element) {
    return null;
  }
  console.log(element);
  return element;
};

const removeContact = async (contactId) => {
  const contactsArray = await listContacts();

  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
};
