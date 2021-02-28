import React from 'react';
import Contacts from './components/Contacts';


class App extends React.Component {
  state = {
    contacts: [],
    name: 'sdsdfsfa'
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <h2>Name</h2>
        <input type="text" value={ this.state.name}/>
        <button>Add contact</button>

        <Contacts
          name={name}
        />
      </div>
      

    )
   }
 }

export default App