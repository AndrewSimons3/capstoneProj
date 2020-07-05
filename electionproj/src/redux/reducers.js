import { combineReducers } from 'redux'

const odds = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_CANDIDATES':
      return action.value;
    default:
      return state
  }
}

export default combineReducers({odds})
