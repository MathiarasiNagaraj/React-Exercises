import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import InputBox from '../inputBox/InputBox'
import { SEARCHBOX } from '../../constants/GeneralConstant'
import { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { BlogAction } from '../../store/BlogSlice'

const SearchBox = props => {
 
  const searchRef = useRef();
  const dispatch = useDispatch();
  const onChangeHandler = (data) => {
    dispatch(BlogAction.search(data));
  }
  return (
    <InputBox styleName="search-box" placeHolder={SEARCHBOX.placeHolder} ref={searchRef} onChange={onChangeHandler} />
  )
}

SearchBox.propTypes = {}

export default SearchBox