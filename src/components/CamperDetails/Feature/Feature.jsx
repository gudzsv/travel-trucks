import CamperEquipment from '../../Catalog/CamperEquipment/CamperEquipment.jsx';

import VehicleDetails from './VehicleDetails/VehicleDetails.jsx';
import styles from './Feature.module.css';

const Feature = ({ camper }) => {
  return (
    <section className={styles.featureSection}>
      <CamperEquipment camper={camper} />

      <VehicleDetails camper={camper} />
    </section>
  );
};

export default Feature;
