import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SubmitBtn from '../../Buttons/SubmitBtn/SubmitBtn.jsx';
import styles from './CampersForm.module.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const formSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  date: yup.date().required('Booking date is required'),
  comment: yup.string().required('Comment is required'),
});

const CampersForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      name: '',
      date: null,
      comment: '',
    },
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    reset();
  }, [reset]);

  const onSubmit = data => {
    toast(
      `Dear ${data.name}. Thank you for choosing us for your campervan adventure! We are pleased to confirm your booking`
    );
    setSelectedDate(null);
    reset();
  };

  return (
    <section className={styles.camperFormSection}>
      <div className={styles.camperFormHead}>
        <h3 className={styles.camperFormTitle}>Book your campervan now</h3>
        <p className={styles.camperFormText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.camperFormContent}>
          <label>
            <input
              className={styles.camperFormInput}
              type="text"
              placeholder="Name*"
              {...register('name')}
            />
            {errors.name && (
              <p className={styles.errorMessage}>{errors.name.message}</p>
            )}
          </label>
          <label>
            <input
              className={styles.camperFormInput}
              type="text"
              placeholder="Email*"
              {...register('email')}
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email.message}</p>
            )}
          </label>
          <label>
            <DatePicker
              selected={selectedDate}
              shouldCloseOnSelect={true}
              onChange={inputDate => {
                setSelectedDate(inputDate);
                setValue('date', inputDate);
              }}
              dateFormat="dd.MM.yyyy"
              placeholderText="Booking date*"
              className={styles.camperFormInput}
            />
            {errors.date && (
              <p className={styles.errorMessage}>{errors.date.message}</p>
            )}
          </label>
          <label>
            <textarea
              className={styles.camperFormTextArea}
              placeholder="Comment"
              {...register('comment')}
            ></textarea>
            {errors.comment && (
              <p className={styles.errorMessage}>{errors.comment.message}</p>
            )}
          </label>
        </div>

        <div className={styles.camperFormBtn}>
          <SubmitBtn>Send</SubmitBtn>
        </div>
      </form>
    </section>
  );
};

export default CampersForm;
