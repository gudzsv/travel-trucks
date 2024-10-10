import { useDispatch, useSelector } from 'react-redux';
import CamperList from './CamperList/CamperList.jsx';
import { useEffect } from 'react';
import {
  selectAllCampers,
  selectLoading,
} from '../../redux/campers/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';

const Catalog = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectAllCampers);

  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (!campers || campers.length === 0) {
      dispatch(fetchCampers({ limit: 2 }));
    }
  }, [dispatch, campers]);

  return loading ? <p>Loading...</p> : <CamperList campers={campers} />;
};

export default Catalog;
