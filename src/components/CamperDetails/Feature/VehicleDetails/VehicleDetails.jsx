import HrLine from '../../../HrLine/HrLine.jsx';
import styles from './VehicleDetails.module.css';

const VehicleDetails = ({ camper }) => {
  return (
    <div className={styles.vehicleDetailsWrapper}>
      <h3 className={styles.vehicleDetailsTitle}>Vehicle details</h3>
      <HrLine />
      <ul className={styles.vehicleDetailsList}>
        <li className={styles.vehicleDetailsItem}>
          <span>Form</span>
          <span>{camper.form}</span>
        </li>
        <li className={styles.vehicleDetailsItem}>
          <span>Length</span>
          <span>{camper.length}</span>
        </li>
        <li className={styles.vehicleDetailsItem}>
          <span>Width</span>
          <span>{camper.width}</span>
        </li>
        <li className={styles.vehicleDetailsItem}>
          <span>Height</span>
          <span>{camper.height}</span>
        </li>
        <li className={styles.vehicleDetailsItem}>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </li>
        <li className={styles.vehicleDetailsItem}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
