import React from 'react'
import styles from './Header.module.scss'
import { LOGO } from '../../constants/Home'
import{Link} from "react-router-dom"
import Navbar from '../../components/navbar/Navbar'
const Header = () => {
    
  return (
      <div className={styles["header"]}>
          <div className={styles["logo"]}>
              <img src={ LOGO.url} alt={LOGO.alt} />
          </div>
      <Navbar />
      <div>
     
      </div>
    </div>
  )
}

export default Header