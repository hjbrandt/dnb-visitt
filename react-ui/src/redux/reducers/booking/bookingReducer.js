/*
 * Created by Thomas Hartmann
 * Reducer for user bookings
 */

import types from './bookingActionTypes'
import { combineReducers } from 'redux'

const date = (state = '', action) => action.type === types.SET_BOOKING_DATE ? action.payload : state
const time = (state = '', action) => action.type === types.SET_BOOKING_TIME ? action.payload : state
const branch = (state = '', action) => action.type === types.SET_BOOKING_BRANCH ? action.payload : state

const name = (state = '', action) => action.type === types.SET_CLIENT_NAME ? action.payload : state
const email = (state = '', action) => action.type === types.SET_CLIENT_EMAIL ? action.payload : state
export const phoneNumber = (state = '', action) => action.type === types.SET_CLIENT_PHONE_NUMBER ? action.payload : state

const property = (state = {}, action) => action.type === types.SELECT_PROPERTY ? action.payload : state

export default combineReducers({
  date,
  time,
  branch,
  client: combineReducers({ name, email, phoneNumber }),
  property
})
