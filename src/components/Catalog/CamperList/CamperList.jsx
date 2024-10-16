import { useDispatch, useSelector } from 'react-redux';
import LoadMoreBtn from '../../Buttons/LoadMoreBtn/LoadMoreBtn.jsx';
import CamperCard from '../CamperCard/CamperCard.jsx';
import styles from './CamperList.module.css';
import { fetchCampers } from '../../../redux/campers/operations.js';
import {
  selectError,
  selectTotalCampers,
} from '../../../redux/campers/selectors.js';
import CampersNorFound from '../CampersNorFound/CampersNorFound.jsx';
import { selectFavorites } from '../../../redux/favorites/selectors.js';
import { selectFilters } from '../../../redux/filters/selectors.js';

let limit = 4;
let limitSequence = 4;

const CamperList = ({ campers }) => {
  const dispatch = useDispatch();

  const totalCampers = useSelector(selectTotalCampers);

  const favorites = useSelector(selectFavorites);

  const savedFilters = useSelector(selectFilters);

  const error = useSelector(selectError);

  const isFavorite = camperId => favorites.includes(camperId);

  const handleMore = () => {
    if (limit < totalCampers) {
      limit += limitSequence;
      dispatch(fetchCampers({ ...savedFilters, limit }));
    }
  };

  return (
    <section className={styles.camperListSection}>
      {error !== null ? (
        <CampersNorFound />
      ) : (
        <ul>
          {campers.map(camper => (
            <CamperCard
              key={camper.id}
              camper={{ ...camper, favorite: isFavorite(camper.id) }}
            />
          ))}
        </ul>
      )}
      {error === null && (
        <LoadMoreBtn onClick={handleMore} disabled={limit >= totalCampers}>
          Load more
        </LoadMoreBtn>
      )}
    </section>
  );
};

export default CamperList;
