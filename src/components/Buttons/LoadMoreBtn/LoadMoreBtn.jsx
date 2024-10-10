import styles from './LoadMoreBtn.module.css';
const LoadMoreBtn = ({ children, onClick }) => {
  const handleClick = () => onClick();
  return (
    <button className={styles.loadMoreBtn} type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
