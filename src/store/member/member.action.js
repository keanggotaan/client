// import axios from '../../axios'
import axios from 'axios'
import {
  FETCH_MEMBERDATA,
  LOADING_MEMBERDATA,
  ERROR_MEMBERDATA,
} from './member.actionType'

export const getMemberData = (payload) => {
  return dispatch => {
    // dispatch(loadMemberData_loading())
    axios.get('http://localhost:3000/members').then(response => {
      console.log('ini response---',response)
      // dispatch(loadMemberSuccess(response))
      })
    // axios.get('http://localhost:3000/members').then(response => {
    //   console.log('ini response',response.data)
    //   dispatch(loadMemberSuccess(response.data))
    // })
    .catch(err=>console.log(err))
  }
}

const loadMemberSuccess = (payload) => ({
  type: FETCH_MEMBERDATA,
  payload: payload
})