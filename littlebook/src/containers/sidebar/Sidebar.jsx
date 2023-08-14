import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.module.scss'

import { getUsers } from '../../services/data'
import { FILTER, TITLE } from '../../constants/GeneralConstant'
import Button from '../../components/button/Button'
import { DARK_MODE, LIGHT_MODE, VIEW_MEMBERS } from '../../constants/ButtonConstant'
import { extractFirstWord } from '../../utils/util'
import CheckBox from '../../components/checkBox/CheckBox'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeAction } from '../../store/ThemeSlice'
import { ModalAction } from '../../store/ModalSlice'

const Sidebar = props => {

  const dispatch = useDispatch();

  const theme = useSelector(state => state.theme.mode);
  const show = useSelector(state => state.modal.isshowMemberModal);
  const filterType = useSelector(state => state.blog.filterType);
  const onToggleModeHandler = () => {
    dispatch(ThemeAction.toggle());
  }
  const onViewMemberHandler = () => {
    dispatch(ModalAction.showMemberModal());

  }

  const filters = filterType?.map((type) => <CheckBox label={ type} />)

  return (
    <div className={styles["sidebar"]}>

          <h1>{ extractFirstWord(TITLE)}</h1>
          
          <div className={styles["filter"]}>
              <h2>{FILTER}  </h2>
        <div>
          
                 {filters}
                  </div>
          </div>
<div>
        <Button name={VIEW_MEMBERS.name} styleName="sidebar-btn"  onClick={onViewMemberHandler} />
              <Button name={theme==='light'? DARK_MODE.name:LIGHT_MODE.name} styleName="sidebar-btn" onClick={ onToggleModeHandler} />
              </div>
    </div>
  )
}

Sidebar.propTypes = {

}

export default Sidebar