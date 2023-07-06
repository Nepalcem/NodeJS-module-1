const contacts = require("./contacts");
const { program } = require("commander");

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return allContacts;

    case "getById":
      const contact = await contacts.getContactById(id);
      return contact;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return newContact;

    case "remove":
      const deletedElement = await contacts.removeContact(id);
      return deletedElement;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
