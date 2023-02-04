import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import BookingPage from './pages/BookingPage'
import ConfirmBooking from './ConfirmBooking'
import { updateTimes, initializeTimes } from '../timesReducer';
import { submitAPI } from '../bookingAPI'

export default function Main() {
  const [date, setDate] = React.useState('')
  const [time, setTime] = React.useState('')
  const [guests, setGuests] = React.useState(1)
  const [occasion, setOccasion] = React.useState('')
  const navigate = useNavigate();

  const resetForm = function(){
    setDate('')
    setTime('')
    setGuests(1)
    setOccasion('')
  }

  const handleSubmit = (formData) => {
    const success = submitAPI({date, time, guests, occasion})
    if(success){
      resetForm();
      navigate('/booking/confirmation')
    }
  }

  const [state, dispatch] = React.useReducer(updateTimes, {}, initializeTimes);
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/booking' element={
          <BookingPage
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            guests={guests}
            setGuests={setGuests}
            occasion={occasion}
            setOccasion={setOccasion}
            availableTimes={state}
            handleSubmit={handleSubmit}
            dispatch={dispatch} />
            }></Route>
            <Route path='/booking/confirmation' element={<ConfirmBooking />}></Route>
      </Routes>
    </>
  )
}
