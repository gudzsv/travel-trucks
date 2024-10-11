import { useState } from 'react';
import sprite from '../../../assets/icons/sprite.svg';
import styles from './FilterForm.module.css';
import Icon from '../../Icon/Icon.jsx';
import HrLine from '../../HrLine/HrLine.jsx';

const FilterForm = () => {
  const [location, setLocation] = useState('Kyiv, Ukraine');
  const [equipment, setEquipment] = useState({
    AC: false,
    Transmission: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
  });

  const iconColor = location.trim() === '' ? 'emptyInput' : 'fillInInput';

  const handleEquipmentChange = event => {
    const { name } = event.target;
    console.log('name: ', name);

    setEquipment(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = () => {};
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

      <p className={styles.filtersTitle}>Filters</p>

      <div className={styles.equipmentWrapper}>
        <h3 className={styles.equipmentTitle}>Vehicle equipment</h3>
        <HrLine />
        <div className={styles.checkboxesWrapper}>
          {Object.keys(equipment).map(item => (
            <label
              key={item}
              style={{ cursor: 'pointer' }}
              className={`${styles.checkboxLabel} ${
                equipment[item] ? styles['checked'] : ''
              }`}
            >
              <input
                type="checkbox"
                name={item}
                className={styles.checkboxInput}
                onClick={handleEquipmentChange}
              />
              <div className={styles.checkboxContent}>
                <Icon iconName={item.toLowerCase()} width={32} height={32} />
                <span>{item}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#FF5733',
          color: '#fff',
          padding: '10px 20px',
        }}
      >
        Search
      </button>
    </form>
  );
};

export default FilterForm;
