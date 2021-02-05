
const initState = {
  inputValue: '',
  currentSong: 'https://www.youtube.com/watch?v=EVu8UqkFQI0',
  firstLoad: true
}

const rootReducer = (state = initState, action) => {

  switch (action.type) {
    case 'INPUT_CHANGE':
      return Object.assign ({}, state, {inputValue: action.text})
    case 'SONG_CHANGE':
      return Object.assign ({}, state, {currentSong: action.song})
    case 'UPDATE_FIRST_LOAD':
      return Object.assign ({}, state, {firstLoad: action.load})
    default: 
        return state
  }
  
}

export default rootReducer