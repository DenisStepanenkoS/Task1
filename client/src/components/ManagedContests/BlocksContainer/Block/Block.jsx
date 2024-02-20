import styles from './Block.module.sass';
import PropTypes from 'prop-types';
import React from 'react';
import { lighten } from 'polished';

function Block ({ icon, header, text, iconStyles, ...props }) {
  const { color } = iconStyles;
  const lighterColor = lighten(0.2, color);
  return (
    <div {...props}>
      <svg width='0' height='0'>
        <linearGradient
          id={`gradient-${color}`}
          x1='0%'
          y1='100%'
          x2='0%'
          y2='0%'
        >
          <stop stopColor={color} offset='0%' />
          <stop stopColor={lighterColor} offset='100%' />
        </linearGradient>
      </svg>
      {React.cloneElement(icon, {
        style: { fill: `url(#gradient-${color})` },
        className: `${styles.iconStyles}`,
      })}

      <h3 className={styles.header}>{header}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

Block.propTypes = {
  className: PropTypes.string,
  iconStyles: PropTypes.object,
  icon: PropTypes.element.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Block;
