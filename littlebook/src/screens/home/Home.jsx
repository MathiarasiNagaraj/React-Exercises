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
import PopUpModal from '../../components/popUpModal/PopUpModal'
import { Bars } from "react-loader-spinner";


const Home = () => {


  const dispatch = useDispatch();
  //fetching blog data
  useEffect(() => {
    getBlogs().then((data) => dispatch(BlogAction.store(data)))
  }, []);
  //fetching member data
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((data) => setUsers(data))
  }, []);

  const theme = useSelector(state => state.theme.mode);
  //pop up modals

  const showMemberModal = useSelector(state => state.modal.isshowMemberModal);
  const showAddNewBlogModal = useSelector(state => state.modal.isaddNewBlogModal);
  const showWarningModal = useSelector(state => state.modal.isshowWarningModal);
  //loader
  const [loading, setLoading] = useState(true);

  const blogs = useSelector(state => state.blog.blogs);
  useEffect(() => {
    if (blogs.length > 0) {
      setLoading(false);
  }
  },[blogs])
  


  return (

    <div className={`${styles["home"]} ${styles[theme]}`} >
      {loading ?
        <div className={styles["loader"]}>
          <Bars

            color="#b355b7"
            ariaLabel="bars-loading"
            visible={true}
          />{" "}
        </div>
        :
        <>
          <Sidebar />
          <BlogsLayout />
          {showMemberModal && <MembersModal members={users} />}
          {showAddNewBlogModal && <NewBlog />}
          {showWarningModal && <PopUpModal />}
        </>}
        </div>
        

  )
}

export default Home