const Filter = () => {
  return (
    <aside>
      <div>
        <h2>Location</h2>
        <div></div>
      </div>

      <h2>Filters</h2>

      {/* <div>
        <h3>Vehicle equipment</h3>
        <div className={styles.equipmentGrid}>
          {equipmentOptions.map((equipment, index) => (
            <button
              key={index}
              className={`${styles.equipmentButton} ${
                selectedEquipment.includes(equipment) ? styles.selected : ''
              }`}
              onClick={() => toggleEquipment(equipment)}
            >
              {equipment}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3>Vehicle type</h3>
        <div className={styles.typeGrid}>
          {vehicleTypes.map((type, index) => (
            <button
              key={index}
              className={`${styles.typeButton} ${
                selectedType === type ? styles.selected : ''
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <button className={styles.searchButton}>Search</button> */}
    </aside>
  );
};

export default Filter;
