import React from 'react'
import PropTypes from 'prop-types'
import InputBox from '../inputBox/InputBox'
import { SEARCHBOX } from '../../constants/GeneralConstant'
import { useDispatch, useSelector  } from 'react-redux'
import { BlogAction } from '../../store/BlogSlice'
import { ModalAction } from "../../store/ModalSlice";
import { WARNING } from "../../constants/GeneralConstant";

const SearchBox = () => {
 
  const isEdit = useSelector((state) => state.blog.isEditMode);
  const dispatch = useDispatch();
  //on changing data triggring search function
  const onChangeHandler = (data) => {
    if (isEdit) {
      const data = {
        message: WARNING.message,
        type: "edit",
      }

      dispatch(ModalAction.showWarningModal(data));
    }
      else { 
    dispatch(BlogAction.search(data));
      }
  }
  return (
    <InputBox styleName="search-box" placeHolder={SEARCHBOX.placeHolder} onChange={onChangeHandler}  />
  )
}



export default SearchBox