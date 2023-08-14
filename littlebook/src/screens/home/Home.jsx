import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../../containers/sidebar/Sidebar'

import styles from './Home.module.scss'
import BlogsLayout from '../../containers/blogLayout/BlogsLayout'
import { useDispatch, useSelector } from 'react-redux'
import MembersModal from '../../containers/membersModal/MembersModal'
import { ModalAction } from '../../store/ModalSlice'
import { getUsers } from '../../services/data'
import NewBlog from '../../components/newBlogModal/NewBlog'
const Home = props => {


  const [users, setUsers] = useState([]);
  useEffect(() => {
   getUsers().then((data)=>setUsers(data))
  }, []);

  const theme = useSelector(state => state.theme.mode);
  const showMemberModal = useSelector(state => state.modal.isshowMemberModal);
  const showAddNewBlogModal = useSelector(state => state.modal.isaddNewBlogModal);
  const dispatch = useDispatch();
  
  const onClickHandler = () => {
  //  dispatch(ModalAction.hideMemberModal());
  }
  console.log(showMemberModal,"home");
  return (

    <div className= {`${styles["home"]} ${styles[theme]}`} onClick={onClickHandler}>

          <Sidebar />
      <BlogsLayout />
      {showMemberModal && <MembersModal members={users} />}
      {showAddNewBlogModal && <NewBlog/>}
        </div>
          

  )
}

Home.propTypes = {}

export default Home