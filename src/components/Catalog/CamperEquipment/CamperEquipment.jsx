import Icon from '../../Icon/Icon.jsx';
import styles from './CamperEquipment.module.css';

const CamperEquipment = ({
  transmission,
  engine,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  adults,
}) => {
  return (
    <ul className={styles.camperEquipment}>
      {transmission && (
        <li
          className={styles.camperEquipmentItem}
          aria-label={`Transmission: ${transmission}`}
        >
          <Icon iconName="transmission" width={20} height={20} />
          {transmission}
        </li>
      )}
      {engine && (
        <li
          className={styles.camperEquipmentItem}
          aria-label={`Engine ${engine}`}
        >
          <Icon iconName="engine" width={20} height={20} />
          {engine}
        </li>
      )}
      {AC && (
        <li
          className={styles.camperEquipmentItem}
          aria-label="Air conditioning available"
        >
          <Icon iconName="ac" width={20} height={20} />
          AC
        </li>
      )}
      {kitchen && (
        <li
          className={styles.camperEquipmentItem}
          aria-label="Kitchen available"
        >
          <Icon iconName="kitchen" width={20} height={20} />
          Kitchen
        </li>
      )}
      {TV && (
        <li className={styles.camperEquipmentItem} aria-label="TV available">
          <Icon iconName="tv" width={20} height={20} />
          TV
        </li>
      )}
      {bathroom && (
        <li
          className={styles.camperEquipmentItem}
          aria-label="Bathroom available"
        >
          <Icon iconName="bathroom" width={20} height={20} />
          Bathroom
        </li>
      )}

      {radio && (
        <li className={styles.camperEquipmentItem} aria-label="Radio available">
          <Icon iconName="radio" width={20} height={20} />
          Radio
        </li>
      )}
      {adults && (
        <li className={styles.camperEquipmentItem} aria-label="Radio available">
          <Icon iconName="adults" width={20} height={20} />2 adults
        </li>
      )}
    </ul>
  );
};

export default CamperEquipment;
