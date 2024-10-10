import { useDispatch } from 'react-redux';
import LoadMoreBtn from '../../Buttons/LoadMoreBtn/LoadMoreBtn.jsx';
import CamperCard from '../CamperCard/CamperCard.jsx';
import styles from './CamperList.module.css';
import { fetchCampers } from '../../../redux/campers/operations.js';

const CamperList = ({ campers }) => {
  const dispatch = useDispatch();
  const handleMore = () => dispatch(fetchCampers({ limit: 2 }));
  return (
    <section className={styles.camperListSection}>
      {campers.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
      <LoadMoreBtn onClick={handleMore}>Load more</LoadMoreBtn>
    </section>
  );
};

export default CamperList;
