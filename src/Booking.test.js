// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';
import { screen, render } from "@testing-library/react";
import BookingForm from "./components/sections/BookingForm";
import { initializeTimes, updateTimes } from "./timesReducer";

describe('html validation', () => {

  it('should have the correct attributes for date field', () => {
    render(<BookingForm />)
    const field = screen.getByLabelText('Choose date')
    expect(field).toHaveAttribute('required')
    expect(field).toHaveAttribute('type')
    expect(field.type).toBe('date')
  })

  it('should have the correct attributes for time field', () => {
    render(<BookingForm />)
    const field = screen.getByLabelText('Choose time')
    expect(field).toHaveAttribute('required')
  })

  it('should have the correct attributes for guests field', () => {
    render(<BookingForm  guests={1} />)
    const field = screen.getByLabelText('Number of guests')
    expect(field).toHaveAttribute('type')
    expect(Number(field.value)).toBeGreaterThan(0)
  })

  it('should have the correct attributes for occasion field', () => {
    render(<BookingForm />)
    const field = screen.getByLabelText('Occasion')
    expect(field).toBeInTheDocument()
  })

})

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