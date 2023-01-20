const API_URL =
  "https://randomuser.me/api/?results=50&seed=25c4bd01f38bafa6&inc=name,email,picture,phone,location,id&nat=in,us";

export const loadContacts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const loadContact = async (contactId) => {
  const { results: contacts } = await loadContacts();
  return contacts.find((contact) => contact.id.value === contactId);
};
