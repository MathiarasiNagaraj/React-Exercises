import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

/**
 * A reusable Button component.
 * @param {Object} props - The props for the Button component.
 * @param {string} props.style - The style of the button (from CSS module).
 * @param {function} props.onClick - The click event handler for the button.
 * @param {string} props.name - The text content of the button.
 * @returns {JSX.Element} - A button element with specified style and click event.
 */
const Button = (props) => {
  const { styleClass, onClick, name,value } = props;

  return (
    <button className={styles[styleClass]} onClick={onClick} value={value}>
      {name}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string,
  onClick: PropTypes.func,
  value:PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Button;
