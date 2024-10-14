import { useDispatch, useSelector } from 'react-redux';
import CamperList from './CamperList/CamperList.jsx';
import { useEffect } from 'react';
import {
  selectAllCampers,
  selectLoading,
} from '../../redux/campers/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';
import Loader from '../Loader/Loader.jsx';
import { clearFilter } from '../../redux/filters/slice.js';

const Catalog = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectAllCampers);

  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (!campers || campers.length === 0) {
      dispatch(clearFilter());
      dispatch(fetchCampers());
    }
  }, [dispatch, campers]);

  return loading ? <Loader /> : <CamperList campers={campers} />;
};

export default Catalog;
