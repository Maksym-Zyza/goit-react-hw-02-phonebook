import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ initialValue = '', onFilterChange }) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        <span className={style.name}>Find contacts by name</span>
        <input
          className={style.input}
          type="text"
          name="name"
          value={initialValue}
          onChange={event => {
            onFilterChange(event.target.value);
          }}
        />
      </label>
    </div>
  );
};

Filter.propTypes = PropTypes.shape({
  initialValue: PropTypes.string,
  onFilterChange: PropTypes.func,
}).isRequired;

export default Filter;
