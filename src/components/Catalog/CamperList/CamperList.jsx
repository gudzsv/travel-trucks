import { useDispatch, useSelector } from 'react-redux';
import LoadMoreBtn from '../../Buttons/LoadMoreBtn/LoadMoreBtn.jsx';
import CamperCard from '../CamperCard/CamperCard.jsx';
import styles from './CamperList.module.css';
import { fetchCampers } from '../../../redux/campers/operations.js';
import { selectTotalCampers } from '../../../redux/campers/selectors.js';

let limit = 4;
let limitSequence = 4;

const CamperList = ({ campers }) => {
  const dispatch = useDispatch();

  const totalCampers = useSelector(selectTotalCampers);

  const handleMore = () => {
    if (limit < totalCampers) {
      limit += limitSequence;
      dispatch(fetchCampers({ limit }));
    }
  };

  return (
    <section className={styles.camperListSection}>
      {campers.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
      <LoadMoreBtn onClick={handleMore} disabled={limit >= totalCampers}>
        Load more
      </LoadMoreBtn>
    </section>
  );
};

export default CamperList;
