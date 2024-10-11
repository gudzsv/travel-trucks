import sprite from '../../assets/icons/sprite.svg';
import React from 'react';
import styles from './Icon.module.css';

const Icon = React.memo(
  ({
    iconName,
    width = 24,
    height = 24,
    className = '',
    ariaLabel = '',
    role = 'img',
    onClick,
    isActive = false,
  }) => {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };
    return (
      <svg
        className={`${styles[className]}
          ${isActive ? styles['isActive'] : null}`}
        width={width}
        height={height}
        role={role}
        aria-label={ariaLabel || iconName}
        onClick={handleClick}
      >
        <use
          xlinkHref={`${sprite}#${iconName}`}
          href={`${sprite}#${iconName}`}
        />
      </svg>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
