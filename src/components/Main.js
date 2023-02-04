import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import BookingPage from './pages/BookingPage'

export default function Main() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/booking' element={<BookingPage />}></Route>
      </Routes>
    </>
  )
}
