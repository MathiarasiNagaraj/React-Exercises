import React from 'react';
import styles from './Footer.module.scss';
import { FOOTER } from '../../constants/components';

/**
 * A reusable component for displaying the footer text.
 * @returns {JSX.Element} - The footer component with the specified text.
 */
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>{FOOTER}</p>
    </div>
  );
};

export default Footer;
