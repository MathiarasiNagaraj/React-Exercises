import React from 'react'
import PropTypes from 'prop-types'
import InputBox from '../inputBox/InputBox'
import { SEARCHBOX } from '../../constants/GeneralConstant'

const SearchBox = props => {
  return (
    <InputBox styleName="search-box" placeHolder={SEARCHBOX.placeHolder } />
  )
}

SearchBox.propTypes = {}

export default SearchBox