import React from 'react';
import shortid from 'shortid';
import './App.css';
import { Component } from 'react';
import Form from './components/form/Form';
import Button from './components/button/Button';
import Filter from './components/filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHendler = data => {
    console.log(data);
    this.setState(prevState => ({
      contacts: [{ id: shortid.generate(), ...data }, ...prevState.contacts],
    }));
  };

  onButtonDeleteClick = id => {
    this.setState({
      contacts: this.state.contacts.filter(obj => obj.id !== id),
    });
  };
  onChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Phoneboock</h1>
        <Form propOnSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />

        <ul>
          {this.state.contacts.map(({ name, number, id }) => {
            return (
              <li key={id}>
                <p>{name}:</p>
                <p>{number}</p>
                <Button
                  text="Delete"
                  onClick={() => {
                    this.onButtonDeleteClick(id);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
