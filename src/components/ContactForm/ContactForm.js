import { useState } from 'react';

// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import s from './ContactForm.module.css';

import { Notify } from 'notiflix';

import { addContact } from 'redux/contacts/actions';
import { getContactsList } from 'redux/contacts/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContactsList);

  const onAddNewContact = evt => {
    evt.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      setName('');
      setNumber('');
      return Notify.warning(`${name} is already in contacts list!`);
    } else {
      dispatch(addContact(name, number));
    }

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onAddNewContact} className={s.form}>
      <label htmlFor="username" className={s.label}>
        Name
      </label>

      <input
        className={s.input}
        type="text"
        name="name"
        id="username"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="usernumber" className={s.label}>
        Number
      </label>
      <input
        className={s.input}
        type="tel"
        name="number"
        id="usernumber"
        value={number}
        onChange={e => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button
        type="submit"
        className={s.btn}
        // disabled={contacts.length >= 4}
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// const mapStateToProps = state => ({
//   contacts: getContactsList(state),
// });

// const mapDispatchToProps = { dispatchAddContacts: addContact };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactAdd);
