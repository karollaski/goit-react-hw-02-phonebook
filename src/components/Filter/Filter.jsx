import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, handleChangeFilter }) => {
  return (
    <form>
      <label htmlFor="filter">
        <input
          type="text"
          value={value}
          name="filter"
          onChange={handleChangeFilter}
        ></input>
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
