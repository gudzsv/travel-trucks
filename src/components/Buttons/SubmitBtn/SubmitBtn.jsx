import styles from './SubmitBtn.module.css';

const SubmitBtn = ({ children, handleSubmit, ariaLabel }) => {
  return (
    <button
      className={styles.submitBtn}
      type="submit"
      onClick={handleSubmit}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default SubmitBtn;
