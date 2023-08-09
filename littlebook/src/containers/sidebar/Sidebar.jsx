import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.module.scss'
import { DARK_MENU, MENU, TITLE } from '../../constants/sidebarConstant'
import { getUsers } from '../../services/data'
const Sidebar = props => {
    useEffect(() => {
      
        const fetchData = () => {
          
        }
        fetchData()
    },[])
  return (
      <div className={styles["sidebar"]}>
          <h1>{TITLE}</h1>
          
          <div className={styles["filter"]}>
              FILTER 
              
          </div>

          <div className={styles["menu"]}>
              {DARK_MENU.map(menu=> <li>{ menu}</li>)}
          </div>
    </div>
  )
}

Sidebar.propTypes = {

}

export default Sidebar