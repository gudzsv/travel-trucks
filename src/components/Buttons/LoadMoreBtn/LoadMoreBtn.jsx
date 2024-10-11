import styles from './LoadMoreBtn.module.css';
const LoadMoreBtn = ({ children, onClick, disabled = false }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };
  return (
    <button
      className={`${styles.loadMoreBtn} ${disabled ? styles.disabled : ''}`}
      type="button"
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default LoadMoreBtn;
