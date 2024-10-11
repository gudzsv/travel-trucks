import Catalog from '../components/Catalog/Catalog.jsx';
import Container from '../components/Container/Container.jsx';
import Filter from '../components/Filter/Filter.jsx';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <Container>
      <div className={styles.pageWrapper}>
        <Filter />
        <Catalog />
      </div>
    </Container>
  );
};

export default CatalogPage;
