import React, { Component } from 'react';
import shortId from 'shortid';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import alertStyles from './alert.module.css';

class App extends Component { 
  state = {
    contacts: [],
    filter: '',
    alert: false,
  };

  addContactItem = contact => {
      if (this.state.contacts.some(el => el.name === contact.name || el.name.toLowerCase() === contact.name)) {
        this.setState({ alert: true });
        setTimeout(() => {
          this.setState({ alert: false });
        }, 3000);
      } else {
        const newContact = {
          name: contact.name,
          number: contact.number,
          id: shortId.generate(),
        }
        return this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
      }
  };
  
  filterContacts = () => {
    const { filter } = this.state;
    const normalizeSearch = filter.toLowerCase();
    const { contacts } = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeSearch));
  };

  deleteContact = contact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.id !== contact),
      };
    });
  };

  filterInput = e => {
    const { name, value } = e.currentTarget;
    console.log(name);
    return this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts) {
      this.setState({contacts: parseContacts})
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, alert, contacts } = this.state;
     return (
       <>
         <CSSTransition
           appear={true}
           in
           timeout={500}
           classNames={styles}
           unmountOnExit>
          <h1 className={styles.title}>Phonebook</h1>
         </CSSTransition>
         <CSSTransition
           appear={alert}
           in={alert} 
           timeout={500}
           classNames={alertStyles}
           unmountOnExit
         >
          <p className={styles.alert}>Contact already exists!</p>
         </CSSTransition>
          <Form onSubmit={this.addContactItem} />
          <h2>Contacts</h2>
         <CSSTransition
          in={contacts.length > 1}
          timeout={250}
          classNames={styles}
          unmountOnExit
         >
           <Filter onFilter={this.filterInput} value={filter}/>
         </CSSTransition>
          <ContactList toFilter={this.filterContacts()} onDelete={this.deleteContact}/>
       </>
    );
  }
};
export default App;