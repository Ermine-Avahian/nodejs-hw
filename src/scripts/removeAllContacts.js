import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length > 0) {
      await writeContacts([]);
      console.log('All contacts have been removed successfully.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (e) {
    console.error('Error while removing all contacts:', e);
  }
};

removeAllContacts();
