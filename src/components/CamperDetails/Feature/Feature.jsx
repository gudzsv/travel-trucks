import CamperEquipment from '../../Catalog/CamperEquipment/CamperEquipment.jsx';

import VehicleDetails from './VehicleDetails/VehicleDetails.jsx';
import styles from './Feature.module.css';

const Feature = ({ camper }) => {
  return (
    <section className={styles.featureSection}>
      <CamperEquipment
        transmission={camper.transmission}
        engine={camper.engine}
        AC={camper.AC}
        bathroom={camper.bathroom}
        kitchen={camper.kitchen}
        TV={camper.TV}
        radio={camper.radio}
        adults={camper.adults}
      />

      <VehicleDetails camper={camper} />
    </section>
  );
};

export default Feature;
