import React from 'react'
import PropTypes from 'prop-types'
import styles from './MemberProfileCard.module.scss'
import ImageBox from '../imageBox/ImageBox';
import { DEFAULT_USER_IMAGE } from '../../constants/GeneralConstant';


const MemberProfileCard = props => {
  const { name, username, photo } = props.data;
  return (
    <div className={styles["member-card"]}>
      <ImageBox src={photo||DEFAULT_USER_IMAGE.url} styleName="member-profile" />
      <h1 className={styles["member-name"]}>{name}</h1>
      <p>{username }</p>
    </div>
  )
}

MemberProfileCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    photo: PropTypes.string
  })
}

export default MemberProfileCard