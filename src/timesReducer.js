import { fetchAPI } from "./bookingAPI";

export const updateTimes = (state, action) => {
 if(action.type === 'date_select'){
    return fetchAPI(new Date(action.date));
  }
  return state;
}

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
}