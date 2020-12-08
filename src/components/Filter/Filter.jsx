import React from 'react';
import PropTypes from 'prop-types';
import filterStyles from './Filter.module.css';

const Filter = ({onFilter, filter}) => {
  return (
    <label className={filterStyles.label}>
      Find contacts by name
      <input
        className={filterStyles.input}
        type="text"
        name="filter"
        onChange={onFilter}
        value={filter} />
    </label>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
}

export default Filter;