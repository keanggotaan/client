import {
  FETCH_MEMBERDATA,
  LOADING_MEMBERDATA,
  ERROR_MEMBERDATA
} from './member.actionType'

const initialState = {
  loading: false,
  error: false,
  data: []
}

const reducers = (state ={ ...initialState}, action) => {
  switch (action.type) {
    case FETCH_MEMBERDATA:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case LOADING_MEMBERDATA:
      return {
        ...state,
        loading: true
      }
    case ERROR_MEMBERDATA:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}

export default reducers