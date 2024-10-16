import OpenPageBtn from '../../Buttons/OpenPageBtn/OpenPageBtn.jsx';
import Icon from '../../Icon/Icon.jsx';
import CamperEquipment from '../CamperEquipment/CamperEquipment.jsx';
import styles from './CamperCard.module.css';

import { useDispatch } from 'react-redux';
import ReviewInfo from '../../ReviewInfo/ReviewInfo.jsx';
import { toggleFavorite } from '../../../redux/favorites/slice.js';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <li className={styles.camperCardArticle}>
      <img
        src={camper.gallery[0].thumb}
        alt={`Image of ${camper.name}`}
        width={292}
        height={320}
        className={styles.camperCardImage}
        loading="lazy"
      />
      <div className={styles.camperCardContent}>
        <header className={styles.camperCardHeader}>
          <div className={styles.camperCardHeaderTop}>
            <h2 className={styles.camperCardTitle}>{camper.name}</h2>
            <div className={styles.camperCardPriceFavoriteWrapper}>
              <span
                className={styles.camperCardPrice}
              >{`€${camper.price.toFixed(2)}`}</span>
              <Icon
                iconName="favorite"
                width={24}
                height={24}
                className="camperCardFavorite"
                role="button"
                onClick={handleToggleFavorite}
                isActive={camper.favorite}
                aria-pressed={camper.favorite}
              />
            </div>
          </div>

          <ReviewInfo
            reviews={camper.reviews}
            rating={camper.rating}
            location={camper.location}
          />
        </header>
        <p className={styles.camperCardDescription}>{camper.description}</p>
        <CamperEquipment camper={camper} />
        <OpenPageBtn
          open="new"
          url={`/catalog/${camper.id}`}
          ariaLabel="Open camper details page"
        >
          Show More
        </OpenPageBtn>
      </div>
    </li>
  );
};

export default CamperCard;
