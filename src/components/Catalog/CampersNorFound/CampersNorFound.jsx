import styles from './CampersNorFound.module.css';
import Image from '../../../assets/Img/404-CampersNotFound.webp';

const CampersNorFound = () => {
  return (
    <div className={styles.camperNotFoundWrapper}>
      <span className={styles.camperNotText}>
        Campers
        <span className={styles.camperNotTextDecoration}> Not Found</span>
      </span>
      <img
        className={styles.camperNotFoundImage}
        src={Image}
        alt="Campers not found"
        width={500}
        loading="lazy"
      />
    </div>
  );
};

export default CampersNorFound;
