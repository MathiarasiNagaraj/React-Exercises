import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../../containers/sidebar/Sidebar'

import styles from './Home.module.scss'
import BlogsLayout from '../../containers/blogLayout/BlogsLayout'
import { useDispatch, useSelector } from 'react-redux'
import MembersModal from '../../containers/membersModal/MembersModal'
import { ModalAction } from '../../store/ModalSlice'
import { getBlogs, getUsers } from '../../services/data'
import NewBlog from '../../components/newBlogModal/NewBlog'
import { BlogAction } from '../../store/BlogSlice'
const Home = props => {


  const dispatch=useDispatch();
  useEffect(() => {
    getBlogs().then((data)=>dispatch(BlogAction.store(data)))
  }, []);
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
   getUsers().then((data)=>setUsers(data))
  }, []);

  const theme = useSelector(state => state.theme.mode);
  const showMemberModal = useSelector(state => state.modal.isshowMemberModal);
  const showAddNewBlogModal = useSelector(state => state.modal.isaddNewBlogModal);

  
  const onClickHandler = () => {
  //  dispatch(ModalAction.hideMemberModal());
  }

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