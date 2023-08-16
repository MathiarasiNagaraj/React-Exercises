import React from 'react'
import PropTypes from 'prop-types'
import styles from './MembersModal.module.scss'
import MemberProfileCard from '../../components/memberProfileCard/MemberProfileCard'
import { useDispatch, useSelector } from 'react-redux'
import { ModalAction } from '../../store/ModalSlice'
const MembersModal = props => {
  const { members } = props;
  //mapping members with card
  const memberProfiles = members.map(member => <MemberProfileCard key={member.id} data={member} />)
  const theme = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();
  //on clicking overlay modal should close
  const onModalCloseHandler = () => {
    dispatch(ModalAction.hideMemberModal());
  }
  return (
    <div className={styles["modal-overlay"]} onClick={onModalCloseHandler}>
    <div className={`${styles["member-modal"]} ${styles[theme]}`} onClick={(e)=>e.stopPropagation()}>
      <h1>Members</h1>
      <div className={styles["member-list"]}> 
        {memberProfiles}
        </div>
      </div>
      </div>
  )
}

MembersModal.propTypes = {}

export default MembersModal;