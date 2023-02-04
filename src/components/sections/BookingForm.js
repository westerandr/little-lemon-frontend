import React from 'react'

export default function BookingForm({date, setDate, time, setTime,  guests, setGuests, occasion, setOccasion, availableTimes, dispatch}) {

  const handleSubmit = function(e){
    e.preventDefault();
    console.log(date, time, guests, occasion);
  }

  return (
    <section id="booking-form">
      <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: 'date_select', date: e.target.value});
        } } />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value) }>
            {
              availableTimes.map((time) => <option key={time}>{time}</option>)
            }
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </section>
  )
}
