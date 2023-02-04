import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import BookingPage from './pages/BookingPage'
import { updateTimes, initializeTimes } from '../timesReducer';

export default function Main() {
  const [date, setDate] = React.useState('')
  const [time, setTime] = React.useState('')
  const [guests, setGuests] = React.useState(1)
  const [occasion, setOccasion] = React.useState('')
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

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
            availableTimes={availableTimes}
            dispatch={dispatch} />
            }></Route>
      </Routes>
    </>
  )
}
