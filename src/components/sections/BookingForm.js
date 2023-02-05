import React from 'react'

export default function BookingForm({date, setDate, time, setTime,  guests, setGuests, occasion, setOccasion, availableTimes, handleSubmit, dispatch}) {
  const today = new Date().toISOString().split("T")[0];

  const handleForm = (e) => {
    e.preventDefault();
    if(guests < 1)return;
    if(new Date(date).getTime() < new Date(today).getTime()) return;
    if(!availableTimes.includes(time)) return;
    handleSubmit({date, time, guests, occasion});
  }

  if(availableTimes && availableTimes.length > 0){
    setTime(availableTimes[0])
  }

  return (
    <section id="booking-form">
      <form aria-label="Reserve a Table Form" onSubmit={handleForm}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} min={today} required
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: 'date_select', date: e.target.value});
        } } />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value) } required>
            {
              availableTimes && availableTimes.map((time) => <option key={time}>{time}</option>)
            }
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input style={{width:'100%'}} className='btn' type="submit" value="Make Your reservation" />
      </form>
    </section>
  )
}
