import css from '../filter /filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filterWrapper}>
      <label>
        {' '}
        <b>Find contacts by name</b>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={css.filterInput}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
