import { DELETE_ME } from '../constants'

const initialState = {
  name: 'war'
  }

  const storeReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_ME:
        return {
          ...state,
          name: action.payload
        }
      default:
        return state
    }
  }

  export default storeReducer