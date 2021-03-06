/*
 * @flow
 * Created by Thomas Hartmann
 * Actions for the booking schedule
 */
import { getSchedule } from '../../../firebase/queries'
import { formatDate } from '../../../helperFunctions/formatting'

import types from './bookingScheduleActionTypes'

export const addBooking = (newSlot) => ({ type: types.ADD_BOOKING, payload: newSlot })

export const changeSchedule = (newSchedule) => ({ type: types.CHANGE_SCHEDULE, payload: newSchedule })

export const clearSchedule = () => ({ type: types.CLEAR_SCHEDULE })

const setDate = (newDate) => ({ type: types.CHANGE_DATE, payload: newDate })

const setBranch = (newBranch) => ({ type: types.CHANGE_BRANCH, payload: newBranch })

export const updateSchedule = (newBranch, newDate) => (dispatch, getState) => {
  const newDateFormatted = formatDate(newDate)
  const { branch, date } = getState().bookingSchedule
  let hasChanged = false

  if (newDateFormatted !== date) {
    dispatch(setDate(newDateFormatted))
    hasChanged = true
  }

  if (newBranch !== branch) {
    dispatch(setBranch(newBranch))
    hasChanged = true
  }

  if (hasChanged) {
    dispatch(clearSchedule())
    dispatch(getSchedule(newBranch, newDateFormatted))
  }
}
