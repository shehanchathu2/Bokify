import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

import SriLankaFooter from './components/footer'
import Hotels from './pages/Hotels'
import HotelDetail from './pages/HotelDetail'
import MyBooking from './pages/MyBooking'
import HotelsReg from './components/HotelsReg'
import Layout  from './pages/hotelsadminpages/Layout'
import Dashboard from './pages/hotelsadminpages/Dashboard'
import AddHotel from './pages/hotelsadminpages/AddHotel'
import AllHotels from './pages/hotelsadminpages/AllHotels'
import {Toaster} from 'react-hot-toast'
  
  
  
const App = () => {

  const owner = useLocation().pathname.includes("owner")

  return (
    <div>
      <Toaster/>
      {!owner && <Navbar />}
      {false && <HotelsReg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotel' element={<Hotels/>} />
          <Route path='/hotel/:id' element={<HotelDetail/>} />
          <Route path='/my-booking' element={<MyBooking/>} />
          
          <Route path='/owner' element={ <Layout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='add-hotel' element={ <AddHotel/>} />
            <Route index path='all-hotels' element={<AllHotels />} />
          </Route>
        </Routes>
      </div>
      <SriLankaFooter/>
    </div>
  )
}

export default App
