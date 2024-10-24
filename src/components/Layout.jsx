import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Fotter from './Footer';

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Fotter/>
    </>
  )
}

export default Layout
