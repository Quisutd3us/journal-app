import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  status: 'not-authenticated', // 'checking' , 'authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: () => {
    },
    logOut: () => {
    },
    checkingCredentials: (state, payload) => {
      state.status = 'checking';
      console.log(payload)
    }
  },
})

export const {login, logOut, checkingCredentials} = authSlice.actions