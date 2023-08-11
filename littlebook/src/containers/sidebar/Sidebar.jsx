import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.module.scss'

import { getUsers } from '../../services/data'
import { FILTER, TITLE } from '../../constants/GeneralConstant'
import Button from '../../components/button/Button'
import { DARK_MODE, VIEW_MEMBERS } from '../../constants/ButtonConstant'
import { extractFirstWord } from '../../utils/util'
const Sidebar = props => {

  return (
      <div className={styles["sidebar"]}>
          <h1>{ extractFirstWord(TITLE)}</h1>
          
          <div className={styles["filter"]}>
       {FILTER}  
          </div>
<div>
          <Button name={VIEW_MEMBERS.name } styleName="sidebar-btn" />
              <Button name={DARK_MODE.name} styleName="sidebar-btn" />
              </div>
    </div>
  )
}

Sidebar.propTypes = {

}

export default Sidebar