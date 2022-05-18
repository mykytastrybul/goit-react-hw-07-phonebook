import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList ';
import Filter from './Filter/Filter';

export function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </>
  );
}
