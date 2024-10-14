import OpenPageBtn from '../../Buttons/OpenPageBtn/OpenPageBtn.jsx';
import Icon from '../../Icon/Icon.jsx';
import CamperEquipment from '../CamperEquipment/CamperEquipment.jsx';
import styles from './CamperCard.module.css';

import { useDispatch } from 'react-redux';
import ReviewInfo from '../../ReviewInfo/ReviewInfo.jsx';
import { toggleFavorite } from '../../../redux/favorites/slice.js';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();

  const {
    id,
    gallery,
    name,
    price,
    rating,
    location,
    description,
    reviews,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    adults,
    favorite,
  } = camper;

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <article className={styles.camperCardArticle}>
      <img
        src={gallery[0].thumb}
        alt={`Image of ${name}`}
        width={292}
        height={320}
        className={styles.camperCardImage}
        loading="lazy"
      />
      <div className={styles.camperCardContent}>
        <header className={styles.camperCardHeader}>
          <div className={styles.camperCardHeaderTop}>
            <h2 className={styles.camperCardTitle}>{name}</h2>
            <div className={styles.camperCardPriceFavoriteWrapper}>
              <span className={styles.camperCardPrice}>{`€ ${price.toFixed(
                2
              )}`}</span>
              <Icon
                iconName="favorite"
                width={24}
                height={24}
                className="camperCardFavorite"
                role="button"
                onClick={handleToggleFavorite}
                isActive={favorite}
                aria-pressed={favorite}
              />
            </div>
          </div>

          <ReviewInfo reviews={reviews} rating={rating} location={location} />
        </header>
        <p className={styles.camperCardDescription}>{description}</p>
        <CamperEquipment
          transmission={transmission}
          engine={engine}
          AC={AC}
          bathroom={bathroom}
          kitchen={kitchen}
          TV={TV}
          radio={radio}
          adults={adults}
        />
        <OpenPageBtn
          open="new"
          url={`/catalog/${id}`}
          ariaLabel="Open camper details page"
        >
          Show More
        </OpenPageBtn>
      </div>
    </article>
  );
};

export default CamperCard;
