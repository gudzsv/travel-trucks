import sprite from '../../assets/icons/sprite.svg';
import React from 'react';

const Icon = React.memo(
  ({
    iconName,
    width = 24,
    height = 24,
    className = '',
    ariaLabel = '',
    role = 'img',
  }) => (
    <svg
      className={className}
      width={width}
      height={height}
      role={role}
      aria-label={ariaLabel || iconName}
    >
      <use xlinkHref={`${sprite}#${iconName}`} href={`${sprite}#${iconName}`} />
    </svg>
  )
);

Icon.displayName = 'Icon';

export default Icon;
