import React from 'react';
import Contacts from './components/Contacts';


class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  }

  handleInputCheng = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault();

    const { contacts, name } = this.state;
    contacts.push(name)
    this.setState({ name: '' })
    // console.log(contacts);
  }
  
  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputCheng} />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <Contacts
          title="Contacts"
          contacts={contacts}
        />
      </div>
      

    )
   }
 }

export default App