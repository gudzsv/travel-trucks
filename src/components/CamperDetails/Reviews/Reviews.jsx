import Icon from '../../Icon/Icon.jsx';
import styles from './Reviews.module.css';

const Reviews = ({ camper }) => {
  const maxStars = 5;
  return (
    <article className={styles.reviewArticle}>
      <ul className={styles.reviewList}>
        {camper.reviews.map((item, index) => (
          <li className={styles.reviewItem} key={index + item.reviewer_name}>
            <div className={styles.reviewHeader}>
              <h2 className={styles.reviewTitle}>{item.reviewer_name[0]}</h2>
              <div className={styles.reviewHeaderContent}>
                <p className={styles.reviewName}>{item.reviewer_name}</p>
                <div>
                  {Array.from({ length: maxStars }, (_, index) => (
                    <span key={index}>
                      <Icon
                        iconName="rating"
                        width={16}
                        height={16}
                        className={
                          index < item.reviewer_rating
                            ? 'starFilled'
                            : 'starEmpty'
                        }
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.reviewComment}>{item.comment}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Reviews;
