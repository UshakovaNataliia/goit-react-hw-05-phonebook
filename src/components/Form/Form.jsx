import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formStyles from './Form.module.css';

class Form extends Component { 
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  inputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  addContactItem = e => {
    e.preventDefault();
    this.props.onSubmit(this.state); //add to this.state by submit
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.addContactItem} className={formStyles.form}>
          <label className={formStyles.label}>
            Name
            <input
              className={formStyles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.inputChange}
              required
            />
          </label>
          <label className={formStyles.label}>
            Number
            <input
              className={formStyles.input}
              type="number"
              name="number"
              value={number}
              onChange={this.inputChange}
              required
            />
          </label>
          <button type="submit" className={formStyles.button}>Add contact</button>
      </form>
      </>
    );
  }
}

Form.propTypes = {
  state: PropTypes.object,
};

export default Form;