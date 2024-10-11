import FilterForm from './FilterForm/FilterForm.jsx';
import styles from './Filter.module.css';

const Filter = () => {
  return (
    <aside className={styles.aside}>
      <FilterForm />
    </aside>
  );
};

export default Filter;
