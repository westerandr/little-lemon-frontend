// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';
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
  expect(result.length).toBeGreaterThan(0)
})

test('updateTimes function', () => {
  const today = new Date()
  const initState = initializeTimes();
  const result = updateTimes(initState, { action: 'date_select', date: today})
  expect(result.length).toBeGreaterThan(0);
})