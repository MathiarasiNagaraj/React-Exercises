import React from 'react';
import styles from './Header.module.scss';
import { NAVIGATION } from '../../constants/components';
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

/**
 * A reusable component for displaying the header of the website.
 * @returns {JSX.Element} - The header component containing logo, navigation, and profile links.
 */
const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1>{NAVIGATION.logo}</h1>
      </Link>
      <NavBar />
      <div className={styles.profile}>
        {NAVIGATION.profile}<div> <AiFillCaretDown /></div>
      </div>
    </div>
  );
};



export default Header;
