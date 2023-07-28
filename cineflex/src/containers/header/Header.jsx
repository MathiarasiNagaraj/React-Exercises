import React from 'react'
import styles from './Header.module.scss'
import { LOGO} from '../../constants/Home'
const Header = () => {
    
  return (
      <div className={styles["header"]}>
          <div className={styles["logo"]}>
              <img src={ LOGO.url} alt={LOGO.alt} />
          </div>
         
    </div>
  )
}

export default Header