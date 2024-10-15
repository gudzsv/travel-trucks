import ReviewInfo from '../../ReviewInfo/ReviewInfo.jsx';
import styles from './DetailsTitle.module.css';

const DetailsTitle = ({ camper }) => {
  return (
    <div className={styles.detailsTitleWrapper}>
      <h2 className={styles.detailsTitle}>{camper.name}</h2>
      <div className={styles.detailsTitleContent}>
        <ReviewInfo
          rating={camper.rating}
          reviews={camper.reviews}
          location={camper.location}
        />
        <span className={styles.detailsTitleText}>{`€${camper.price.toFixed(
          2
        )}`}</span>
      </div>
    </div>
  );
};

export default DetailsTitle;
