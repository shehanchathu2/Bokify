import React, { useEffect } from 'react'
import Navbar from '../../components/hoteladmin/Navbar'
import Sidebar from '../../components/hoteladmin/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'



const Layout = () => {
  const { isOwner, navigate } = useAppContext()
  
  useEffect(() => {
    if (!isOwner) {
      navigate('/')
    }  
  },[isOwner])
  
  return (
   <div className="flex h-screen overflow-hidden">
  {/* Sidebar (fixed) */}
  <div className="w-64 h-screen fixed top-0 left-0 bg-white border-r border-gray-200 shadow-md">
    <Sidebar />
  </div>

  {/* Main content area */}
  <div className="flex-1 ml-64 h-screen overflow-y-auto">
    <Outlet />
  </div>
</div>

  )
}

export default Layout
