// const NotFoundPage = () => {
//   return <div>NotFoundPage</div>;
// };

// export default NotFoundPage;

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/404-animation.json';
import styles from './NotFoundPage.module.css';
import Container from '../components/Container/Container.jsx';

const NotFoundPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div>
        <div className={styles.sectionsWrapper}>
          <div className={styles.lottieContainer} aria-hidden="true">
            <Lottie
              animationData={animationData}
              loop={true}
              className={styles.lottieAnimation}
              role="img"
              aria-label="Page not found"
            />
          </div>
          <section
            className={styles.notFoundContent}
            aria-labelledby="not-found-title"
          >
            <h1 className={styles.notFoundTitle} id="not-found-title">
              Oops!
            </h1>
            <p className={styles.notFoundMessage}>
              Looks like this page is not available.
            </p>
            <p className={styles.notFoundSubMessage}>
              Let’s get you back on track!
            </p>
            <Link to="/" className={styles.notFoundLink} aria-label="go back">
              Go to Home
            </Link>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
