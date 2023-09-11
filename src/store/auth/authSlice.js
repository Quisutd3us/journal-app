import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  state: 'checking', // 'not-authenticated' , 'authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: () => {},
    logOut: () => {},
    checkingCredentials: () => {}
  },
})

export const {
  login,
  logOut,
  checkingCredentials} = counterSlice.actions
