import React from 'react'
import PropTypes from 'prop-types'
import styles from './MemberProfileCard.module.scss'
import ImageBox from '../imageBox/ImageBox';


const MemberProfileCard = props => {
  const { name, username, photo } = props.data;
  return (
    <div className={styles["member-card"]}>
      <ImageBox src={photo} styleName="member-profile" />
      <h1 className={styles["member-name"]}>{name}</h1>
      <p>{username }</p>
    </div>
  )
}

MemberProfileCard.propTypes = {}

export default MemberProfileCard