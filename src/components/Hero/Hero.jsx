import Container from '../Container/Container.jsx';
import styles from './Hero.module.css';
import OpenPageBtn from '../Buttons/OpenPageBtn/OpenPageBtn.jsx';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroContentWrapper}>
          <h1 className={styles.heroTitle}>Campers of your dreams</h1>
          <p className={styles.heroText}>
            You can find everything you want in our catalog
          </p>
          <OpenPageBtn
            className="heroBtn"
            url={'/catalog'}
            ariaLabel="View the campers catalog"
          >
            View Now
          </OpenPageBtn>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
