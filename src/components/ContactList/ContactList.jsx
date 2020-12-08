import React from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import contactListStyles from './ContactList.module.css';

const ContactList = props => {
  const { toFilter, onDelete } = props;
  return (
  <TransitionGroup component="ul" className={contactListStyles.ul}>
      {toFilter.map(el => {
        const { name, number, id } = el;
        return (
          <CSSTransition key={id} in timeout={250} unmountOnExit classNames={contactListStyles}>
          <li  key={id} className={contactListStyles.li}>
           <span className={contactListStyles.span}> {name}: {number}</span>
            <button className={contactListStyles.button} type="button" onClick={() => onDelete(id)}>
              X
            </button>
          </li>
          </CSSTransition>
        );
      })}
  </TransitionGroup>
  );
};

ContactList.propTypes = {
  toFilter: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;