import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsThunk';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useEffect, useState } from 'react';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, contacts]);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  if (contacts) {
    return (
      <ul className={s.list}>
        {filtered.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    );
  }
}
