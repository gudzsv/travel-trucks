import { useDispatch, useSelector } from 'react-redux';
import CamperList from './CamperList/CamperList.jsx';
import { useEffect } from 'react';
import {
  selectAllCampers,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors.js';
import { fetchCampers } from '../../redux/campers/operations.js';
import Loader from '../Loader/Loader.jsx';
import { clearFilter } from '../../redux/filters/slice.js';
import { selectFilters } from '../../redux/filters/selectors.js';

const Catalog = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectAllCampers);

  const loading = useSelector(selectLoading);

  const error = useSelector(selectError);

  const filters = useSelector(selectFilters);
  console.log('filters: ', filters.length);

  useEffect(() => {
    if (
      (!campers || campers.length === 0) &&
      error === null &&
      Object.keys(filters).length === 0
    ) {
      dispatch(clearFilter());
      dispatch(fetchCampers());
    }
  }, [dispatch, campers, error]);

  return loading ? <Loader /> : <CamperList campers={campers} />;
};

export default Catalog;
