import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OpenPageBtn.module.css';

const OpenPageBtn = ({ open = 'same', children, url }) => {
  const navigate = useNavigate();

  const openInNewTab = useCallback(url => {
    window.open(url, '_blank');
  }, []);

  const navigateInSameTab = useCallback(
    url => {
      navigate(url);
    },
    [navigate]
  );

  return (
    <>
      {open === 'new' && (
        <button
          type="button"
          className={styles.buttonStyle}
          onClick={() => openInNewTab(url)}
          aria-label={`Open ${url} in new tab`}
        >
          {children}
        </button>
      )}

      {open === 'same' && (
        <button
          type="button"
          className={styles.buttonStyle}
          onClick={() => navigateInSameTab(url)}
          aria-label={`Navigate to ${url}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default OpenPageBtn;
