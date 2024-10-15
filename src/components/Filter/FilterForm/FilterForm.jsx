import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterFieldset from '../FilterFieldset/FilterFieldset.jsx';
import sprite from '../../../assets/icons/sprite.svg';
import styles from './FilterForm.module.css';
import SubmitBtn from '../../Buttons/SubmitBtn/SubmitBtn.jsx';
import { useDispatch } from 'react-redux';
import { transformObject } from '../../../helpers/helpers.js';
import { fetchCampers } from '../../../redux/campers/operations.js';
import { clearFilter, setFilter } from '../../../redux/filters/slice.js';

const schema = yup.object().shape({
  location: yup.string().required('Location is required'),
  equipment: yup
    .object()
    .test('isChecked', 'Please select at least one equipment', value =>
      Object.values(value).some(v => v)
    ),
  vehicleType: yup.string().required('Please select a vehicle type'),
});

const FilterForm = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      location: 'Kyiv, Ukraine',
      equipment: {
        AC: false,
        Transmission: false,
        Kitchen: false,
        TV: false,
        Bathroom: false,
      },
      vehicleType: '',
    },
  });

  const onSubmit = data => {
    const filters = {
      location: data.location.split(',')[0],
      ...transformObject(data.equipment),
      form: data.vehicleType,
    };

    dispatch(clearFilter());
    dispatch(setFilter(filters));
    dispatch(fetchCampers(filters));
  };

  const iconColor =
    watch('location').trim() === '' ? 'emptyInput' : 'fillInInput';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.locationWrapper}>
        <p className={styles.locationTitle}>Location</p>
        <label className={styles.locationInputLabel}>
          <svg
            width={20}
            height={20}
            className={`${styles.locationIcon} ${styles[iconColor]}`}
          >
            <use href={`${sprite}#location`}></use>
          </svg>
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <input
                className={styles.locationInput}
                type="text"
                {...field}
                placeholder="City"
              />
            )}
          />
          {errors.location && (
            <p className="errorMessage">{errors.location.message}</p>
          )}
        </label>
      </div>

      <div className={styles.filterWrapper}>
        <p className={styles.filtersTitle}>Filters</p>

        <Controller
          name="equipment"
          control={control}
          render={({ field }) => (
            <FilterFieldset
              type={'checkbox'}
              options={{
                AC: 'AC',
                Transmission: 'Automatic',
                Kitchen: 'Kitchen',
                TV: 'TV',
                Bathroom: 'Bathroom',
              }}
              legend={'Vehicle equipment'}
              handleChange={field.onChange}
              selectedValues={field.value}
            />
          )}
        />
        {errors.equipment && (
          <p className="errorMessage">{errors.equipment.message}</p>
        )}

        <Controller
          name="vehicleType"
          control={control}
          render={({ field }) => (
            <FilterFieldset
              type={'radio'}
              options={{
                panelTruck: 'Van',
                fullyIntegrated: 'Fully Integrated',
                alcove: 'Alcove',
              }}
              legend={'Vehicle type'}
              handleChange={field.onChange}
              selectedValues={{ selected: field.value }}
            />
          )}
        />
        {errors.vehicleType && (
          <p className="errorMessage">{errors.vehicleType.message}</p>
        )}
      </div>

      <SubmitBtn
        handleSubmit={handleSubmit(onSubmit)}
        ariaLabel={'Submit filter form'}
      >
        Search
      </SubmitBtn>
    </form>
  );
};

export default FilterForm;
