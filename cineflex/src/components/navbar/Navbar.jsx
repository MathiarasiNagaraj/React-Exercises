import React from 'react'
import { useAuthContext } from '../../auth/AuthContext'
import { NAV_LINKS } from '../../constants/Navbar'
import Navlink from '../navlink/Navlink'

const Navbar = () => {
    const { user } = useAuthContext();
    console.log("user",user.userEmail)
    const nav = NAV_LINKS.map(item => <Navlink data={ item} />)
  return (
      <nav>
  {nav}
   </nav> 
  )
}

export default Navbar