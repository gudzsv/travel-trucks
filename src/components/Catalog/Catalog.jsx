import { useDispatch, useSelector } from 'react-redux';
import CamperList from './CamperList/CamperList.jsx';
import { useEffect } from 'react';
import {
  selectAllCampers,
  selectLoading,
} from '../../redux/campers/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';
import Loader from '../Loader/Loader.jsx';
import { clearItems } from '../../redux/campers/slice.js';

const Catalog = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectAllCampers);

  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (!campers) {
      dispatch(clearItems());
      dispatch(fetchCampers());
    }
  }, [dispatch, campers]);

  return loading ? <Loader /> : <CamperList campers={campers} />;
};

export default Catalog;
