import React from 'react'
import PropTypes from 'prop-types'
import styles from './PopUpModal.module.scss'
import { useDispatch,useSelector } from 'react-redux';
import Button from '../button/Button';
import { WARNING } from '../../constants/ButtonConstant';
import { ModalAction } from '../../store/ModalSlice';
import { BlogAction } from '../../store/BlogSlice';

const PopUpModal = props => {
    const dispatch = useDispatch();
    const warningMessage = useSelector(state => state.modal.warningMessage);
    const warningType = useSelector(state => state.modal.warningType);
    const mode = useSelector(state => state.modal.isshowWarningModal);
    const theme = useSelector(state => state.theme.mode);
    const onExitHandler = () => {
        if (warningType === "add") {
            dispatch(ModalAction.closeWarningModal());
            dispatch(ModalAction.hideAddNewBlogModal());
        }
        else if (warningType === "edit") {
     
            dispatch(ModalAction.closeWarningModal());

            dispatch(BlogAction.setEditMode(false));
        }
    }
    const onClosePopModalHandler = () => {

        dispatch(ModalAction.closeWarningModal());


}
  return (
      <div className={`${styles["modal-content"]} ${styles[theme]}`}>
          <div className={styles["message"]}>
              {warningMessage}
          </div>

          {warningType === "form" ?
              <div>
                  <Button name={WARNING.okay} styleName="edit-btn" onClick={onClosePopModalHandler} />
                  </div>
              :
              
              <div className={styles["buttons"]}>      
          <Button name={WARNING.exit} styleName="edit-btn" onClick={onExitHandler} />
          
                  <Button name={WARNING.cancel} styleName="save-btn" onClick={onClosePopModalHandler} />
                  </div>
          }
        
      </div>
  )
}

PopUpModal.propTypes = {}

export default PopUpModal