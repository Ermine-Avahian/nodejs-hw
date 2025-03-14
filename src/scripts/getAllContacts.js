import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts;
  } catch (e) {
    console.error('Error while getting contacts:', e);
  }
};

console.log(await getAllContacts());
