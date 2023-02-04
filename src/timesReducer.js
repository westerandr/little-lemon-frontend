export const updateTimes = (state, action) => {
  if(action.type === 'add_new_hour'){
    if(action.date in state){
      return {...state, [action.date] : [...state[action.date], action.time]}
    }else{
      return {...state, [action.date] : [action.time]}
    }
  }
  return state;
}

export const initializeTimes = () => {
  const today = new Date().toISOString().substring(0,10)
  return { [today] : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
}