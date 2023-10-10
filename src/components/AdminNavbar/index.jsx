import React from 'react'
import { AdminNav } from './styled'
import logo from '../../assets/images/adminlogo.svg'
import adminuser from '../../assets/images/adminuser.svg'

const AdminNavbar = () => {
  return (
    <AdminNav>
        <AdminNav.Logo src={logo}/>
        <AdminNav.AdminBox>
            <AdminNav.UserLogo src={adminuser}/>
            <AdminNav.Text>
            Qodirjon Polatov
            </AdminNav.Text>
        </AdminNav.AdminBox>
    </AdminNav>
  )
}

export default AdminNavbar