import styles from './CampersTab.module.css';

const CampersTab = ({ active, handleClick }) => {
  const { feature, reviews } = active;
  return (
    <div className={styles.campersTabWrapper}>
      <button
        className={`${styles.campersTab} ${styles[feature ? 'active' : '']}`}
        type="button"
        aria-label="Show Feature"
        onClick={() => handleClick('feature')}
      >
        Feature
      </button>
      <button
        className={`${styles.campersTab} ${styles[reviews ? 'active' : '']}`}
        type="button"
        aria-label="Show Reviews"
        onClick={() => handleClick('reviews')}
      >
        Reviews
      </button>
    </div>
  );
};

export default CampersTab;
