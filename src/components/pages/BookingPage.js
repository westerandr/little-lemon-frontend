import React from 'react'
import PageTitle from '../sections/PageTitle'
import BookingForm from '../sections/BookingForm'
import restaurantImage from '../../assets/restaurant.jpg'

export default function BookingPage({date, setDate, time, setTime,  guests, setGuests, occasion, setOccasion, dispatch, handleSubmit, availableTimes}) {
  return (
    <>
      <PageTitle
        title="Reserve a Table"
        description="Book your table at Little Lemon and enjoy a delicious dining experience in the heart of Chicago"
        image={restaurantImage} />
        <BookingForm
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          guests={guests}
          setGuests={setGuests}
          occasion={occasion}
          setOccasion={setOccasion}
          availableTimes={availableTimes}
          handleSubmit={handleSubmit}
          dispatch={dispatch} />
    </>
  )
}
