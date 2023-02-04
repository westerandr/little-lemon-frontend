import { screen, render } from "@testing-library/react";
import BookingForm from "./components/sections/BookingForm";
import { initializeTimes, updateTimes } from "./timesReducer";

test('Renders Date Field Label', () => {
  render(<BookingForm/>)
  const dateLabel = screen.getByText('Choose date')
  expect(dateLabel).toBeInTheDocument()
})

test('booking form can be submitted', () => {
  render(<BookingForm/>)
  const submitButton = screen.getByText('Make Your reservation')
  expect(submitButton).toBeDefined();
})

test('initializeTimes function', () => {
  const result = initializeTimes();
  const today = new Date().toISOString().substring(0,10)
  expect(result).toEqual({ [today] : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] })
})

test('updateTimes function', () => {
  const today = new Date().toISOString().substring(0,10)
  const testState = initializeTimes()
  const expectedState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  const newState = updateTimes(testState, { type: 'add_new_hour', date: today, time: '23:00'})
  expect(newState[today]).toEqual(expectedState)
})