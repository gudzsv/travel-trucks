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
        {Object.keys(options).map(item => {
          const isChecked =
            type === 'checkbox'
              ? selectedValues[item] || false
              : selectedValues.selected === item;

          return (
            <label
              key={item}
              className={`${styles.label} ${isChecked ? styles.checked : ''}`}
            >
              <input
                type={type}
                name={type !== 'checkbox' ? 'radioBtn' : item}
                value={item}
                className={styles.input}
                onChange={e =>
                  handleChange(
                    type === 'checkbox'
                      ? { ...selectedValues, [item]: e.target.checked }
                      : item
                  )
                }
                checked={isChecked}
              />
              <div className={styles.contentWrapper}>
                <Icon
                  iconName={item.toLocaleLowerCase()}
                  width={32}
                  height={32}
                />
                <span className={styles.contentText}>{options[item]}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default FilterFieldset;
