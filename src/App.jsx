import React from 'react';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import style from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandler = contactObj => {
    if (this.state.contacts.some(({ name }) => name === contactObj.name)) {
      return alert(`${contactObj.name} is already in contacts.`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactObj],
      };
    });
  };

  changeFilterHandler = filter => {
    this.setState({ filter });
  };

  contactDeleteHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  contactListFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContactList = this.contactListFilter();
    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmit={this.submitHandler} />

        <h2 className={style.subtitle}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter
            initialValue={filter}
            onFilterChange={this.changeFilterHandler}
          />
        )}
        {filteredContactList.length > 0 && (
          <ContactList
            contacts={filteredContactList}
            onDelBtnClick={this.contactDeleteHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
