import Icon from '../../Icon/Icon.jsx';
import styles from './CamperEquipment.module.css';

const CamperEquipment = ({ camper }) => {
  return (
    <ul className={styles.camperEquipment}>
      {camper.transmission && (
        <li
          className={styles.camperEquipmentItem}
          aria-label={`Transmission: ${camper.transmission}`}
        >
          <Icon iconName="transmission" width={20} height={20} />
          {camper.transmission}
        </li>
      )}
      {camper.engine && (
        <li
          className={styles.camperEquipmentItem}
          aria-label={`Engine ${camper.engine}`}
        >
          <Icon iconName="engine" width={20} height={20} />
          {camper.engine}
        </li>
      )}
      {camper.AC && (
        <li
          className={styles.camperEquipmentItem}
          aria-label="Air conditioning available"
        >
          <Icon iconName="ac" width={20} height={20} />
          AC
        </li>
      )}
      {camper.kitchen && (
        <li
          className={styles.camperEquipmentItem}
          aria-label="Kitchen available"
        >
          <Icon iconName="kitchen" width={20} height={20} />
          Kitchen
        </li>
      )}
      {camper.TV && (
        <li className={styles.camperEquipmentItem} aria-label="TV available">
          <Icon iconName="tv" width={20} height={20} />
          TV
        </li>
      )}
      {camper.bathroom && (
        <li
          className={styles.camperEquipmentItem}
          aria-label="Bathroom available"
        >
          <Icon iconName="bathroom" width={20} height={20} />
          Bathroom
        </li>
      )}

      {camper.radio && (
        <li className={styles.camperEquipmentItem} aria-label="Radio available">
          <Icon iconName="radio" width={20} height={20} />
          Radio
        </li>
      )}
      {camper.adults && (
        <li
          className={styles.camperEquipmentItem}
          aria-label="2 adults available"
        >
          <Icon iconName="adults" width={20} height={20} />2 adults
        </li>
      )}
      {camper.refrigerator && (
        <li
          className={styles.camperEquipmentItem}
          aria-label="Refrigerator available"
        >
          <Icon iconName="refrigerator" width={20} height={20} />
          Refrigerator
        </li>
      )}
      {camper.microwave && (
        <li
          className={styles.camperEquipmentItem}
          aria-label="Microwave available"
        >
          <Icon iconName="microwave" width={20} height={20} />
          Microwave
        </li>
      )}
      {camper.gas && (
        <li className={styles.camperEquipmentItem} aria-label="Gas available">
          <Icon iconName="gas" width={20} height={20} />
          Gas
        </li>
      )}
      {camper.water && (
        <li className={styles.camperEquipmentItem} aria-label="Water available">
          <Icon iconName="water" width={20} height={20} />
          Water
        </li>
      )}
    </ul>
  );
};

export default CamperEquipment;
