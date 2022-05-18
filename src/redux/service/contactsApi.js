import axios from 'axios';

export async function getContactsApi() {
  const { data } = await axios.get(
    'https://62821c85ed9edf7bd87eb81d.mockapi.io/contacts'
  );
  return data;
}

export async function addContactApi(contact) {
  const { data } = await axios.post(
    'https://62821c85ed9edf7bd87eb81d.mockapi.io/contacts',
    contact
  );
  return data;
}

export async function deleteContactApi(id) {
  const { data } = await axios.delete(
    `https://62821c85ed9edf7bd87eb81d.mockapi.io/contacts/${id}`
  );
  return data;
}
