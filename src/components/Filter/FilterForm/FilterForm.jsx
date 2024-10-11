import { useState } from 'react';
import FilterFieldset from '../FilterFieldset/FilterFieldset.jsx';
import sprite from '../../../assets/icons/sprite.svg';
import styles from './FilterForm.module.css';
import SubmitBtn from '../../Buttons/SubmitBtn/SubmitBtn.jsx';

const equipment = {
  AC: false,
  Transmission: false,
  Kitchen: false,
  TV: false,
  Bathroom: false,
};

const vehicleType = {
  alcove: 'Alcove',
  fullyIntegrated: 'Fully Integrated',
  panelTruck: 'Van',
};

const FilterForm = () => {
  const [location, setLocation] = useState('Kyiv, Ukraine');

  const [selectedCheckboxValues, setSelectedCheckboxValues] =
    useState(equipment);
  const [selectedRadioValue, setSelectedRadioValue] = useState('');

  const handleCheckboxChange = item => {
    setSelectedCheckboxValues(prev => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleRadioChange = item => {
    setSelectedRadioValue(item);
  };

  const handleSubmit = () => {};

  const iconColor = location.trim() === '' ? 'emptyInput' : 'fillInInput';

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.locationWrapper}>
        <p className={styles.locationTitle}>Location</p>
        <label className={styles.locationInputLabel}>
          <svg
            width={20}
            height={20}
            className={`${styles.locationIcon} ${styles[iconColor]}`}
          >
            <use href={`${sprite}#location`}></use>
          </svg>
          <input
            className={styles.locationInput}
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="City"
          />
        </label>
      </div>

      <div className={styles.filterWrapper}>
        <p className={styles.filtersTitle}>Filters</p>

        <FilterFieldset
          type={'checkbox'}
          options={equipment}
          legend={'Vehicle equipment'}
          handleChange={handleCheckboxChange}
          selectedValues={selectedCheckboxValues}
        />

        <FilterFieldset
          type={'radio'}
          options={vehicleType}
          legend={'Vehicle type'}
          handleChange={handleRadioChange}
          selectedValues={{ selected: selectedRadioValue }}
        />
      </div>

      <SubmitBtn handleSubmit={handleSubmit} ariaLabel={'Submit filter form'}>
        Search
      </SubmitBtn>
    </form>
  );
};

export default FilterForm;
