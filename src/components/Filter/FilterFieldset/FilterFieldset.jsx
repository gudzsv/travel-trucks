import HrLine from '../../HrLine/HrLine.jsx';
import Icon from '../../Icon/Icon.jsx';
import styles from './FilterFieldset.module.css';

const FilterFieldset = ({
  type,
  options,
  legend,
  handleChange,
  selectedValues,
}) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.fieldsetLegend}>{legend}</legend>
      <HrLine />
      <div className={styles.inputsWrapper}>
        {Object.keys(options).map(item => (
          <label
            key={item}
            className={`${styles.label} ${
              type === 'checkbox'
                ? selectedValues[item]
                  ? styles.checked
                  : ''
                : selectedValues.selected === item
                ? styles.checked
                : ''
            }`}
          >
            <input
              type={type}
              name={item}
              value={options[item]}
              className={styles.input}
              onChange={() => handleChange(item)}
              checked={
                type === 'checkbox'
                  ? selectedValues[item] || false
                  : selectedValues.selected === item
              }
            />
            <div className={styles.contentWrapper}>
              <Icon
                iconName={item.toLocaleLowerCase()}
                width={32}
                height={32}
              />
              <span className={styles.contentText}>
                {type !== 'checkbox'
                  ? options[item]
                  : item === 'Transmission'
                  ? 'Automatic'
                  : item}
              </span>
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default FilterFieldset;
