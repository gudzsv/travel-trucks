import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCamper } from '../../redux/campers/operations.js';
import { selectCamperById } from '../../redux/campers/selectors.js';
import CamperGallery from './CamperGallery/CamperGallery.jsx';

import CampersTab from './Feature/CampersTab/CampersTab.jsx';

import Feature from './Feature/Feature.jsx';
import DetailsTitle from './DetailsTitle/DetailsTitle.jsx';
import styles from './CamperDetails.module.css';
import Reviews from './Reviews/Reviews.jsx';
import CampersForm from './CampersForm/CampersForm.jsx';

const CamperDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(state => selectCamperById(state, id));
  const [isActiveTab, setIsActiveTab] = useState({
    feature: true,
    reviews: false,
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchCamper(id));
    }
  }, [dispatch, id]);

  const handleClickTab = tabName => {
    setIsActiveTab({
      feature: tabName === 'feature',
      reviews: tabName === 'reviews',
    });
  };

  if (!camper) {
    return <p>Camper not found</p>;
  }

  return (
    <div className={styles.camperDetailsWrapper}>
      <section>
        <DetailsTitle camper={camper} />
        <div className={styles.camperDetailsGallery}>
          <CamperGallery gallery={camper.gallery} />
          <p className={styles.camperDetailsText}>{camper.description}</p>
        </div>
      </section>

      <CampersTab active={isActiveTab} handleClick={handleClickTab} />
      <div className={styles.tabWrapper}>
        {isActiveTab.feature ? (
          <Feature camper={camper} />
        ) : (
          <Reviews camper={camper} />
        )}
        <CampersForm />
      </div>
    </div>
  );
};

export default CamperDetails;
