import Icon from '../Icon/Icon.jsx';
import styles from './ReviewInfo.module.css';

const ReviewInfo = ({ rating, reviews, location }) => {
  const totalReviews = reviews.length;

  return (
    <ul className={styles.camperCardHeaderBottom}>
      <li className={styles.camperCardHeaderBottomItem}>
        <Icon
          className="camperCardRating"
          isActive={rating > 0}
          iconName="rating"
          width={16}
          height={16}
        />
        <span className={styles.camperCardRating}>
          {`${rating} (${totalReviews} Reviews)`}
        </span>
      </li>
      <li className={styles.camperCardHeaderBottomItem}>
        <Icon iconName="location" width={16} height={16} />
        <span className={styles.camperCardLocation}>{location}</span>
      </li>
    </ul>
  );
};

export default ReviewInfo;
