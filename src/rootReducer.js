
const initState = {
  inputValue: ''
}

const rootReducer = (state = initState, action) => {

  switch (action.type) {
    case 'INPUT_CHANGE':
      return Object.assign ({}, state, {inputValue: action.text})
      default: 
        return state
  }
  
}

export default rootReducer