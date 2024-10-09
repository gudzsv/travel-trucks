import { Link } from 'react-router-dom';
import Container from '../Container/Container.jsx';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroContentWrapper}>
          <h1 className={styles.heroTitle}>Campers of your dreams</h1>
          <p className={styles.heroText}>
            You can find everything you want in our catalog
          </p>
          <Link
            to="/catalog"
            className={styles.heroBtn}
            aria-label="View the catalog"
          >
            View Now
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
