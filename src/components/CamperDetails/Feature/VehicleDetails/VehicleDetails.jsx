import HrLine from '../../../HrLine/HrLine.jsx';
import styles from './VehicleDetails.module.css';

const VehicleDetails = ({ camper }) => {
  function modifyString(inputString) {
    if (inputString.length === 0) return inputString;

    const lastChar = inputString.slice(-1);
    const modifiedString = inputString.slice(0, -1).concat(' ', lastChar);

    return modifiedString;
  }

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
          <span>{modifyString(camper.length)}</span>
        </li>
        <li className={styles.vehicleDetailsItem}>
          <span>Width</span>
          <span>{modifyString(camper.width)}</span>
        </li>
        <li className={styles.vehicleDetailsItem}>
          <span>Height</span>
          <span>{modifyString(camper.height)}</span>
        </li>
        <li className={styles.vehicleDetailsItem}>
          <span>Tank</span>
          <span>{modifyString(camper.tank)}</span>
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
