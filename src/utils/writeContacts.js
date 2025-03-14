import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data =
      typeof updatedContacts === 'string'
        ? updatedContacts
        : JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, { encoding: 'utf-8' });
  } catch (e) {
    console.error('File write error:', e);
  }
};
