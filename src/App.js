import React from 'react';
import shortid from 'shortid';
import './App.css';
import { Component } from 'react';
import Form from './components/form/Form';

class App extends Component {
  state = {
    contacts: [],
  };

  idForContact = shortid.generate();

  formSubmitHendler = data => {
    console.log(data);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phoneboock</h1>
        <Form propOnSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        {this.state.contacts.map(contact => {
          return (
            <p key={this.idForContact}>
              {contact.name}:{contact.number}
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;
