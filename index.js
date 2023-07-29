const contacts = require("./contacts");
const argv = require("yargs").argv;


const invokeAction = async ({ action, id, name, email, phone }) =>{
  switch (action) {
    case 'list':
      // ...
         const getContactsList = await contacts.listContacts();
         return console.table(getContactsList);
      break;

    case 'get':
      // ... id
          const getById = await contacts.getContactById(id);
          return console.table(getById);
      break;

    case 'add':
      // ... name email phone
          const newContact = await contacts.addContact({ name, email, phone });
          return console.table(newContact);
      break;

    case 'remove':
      // ... id
          const removeContact = await contacts.removeContact(id);
          return console.table(removeContact);

      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);