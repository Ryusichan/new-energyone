import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  snackbarOpen: boolean
  snackbarMessage: string
  snackbarType: 'error' | 'warning' | 'info' | 'success'
}

const initialState: InitialState = {
  snackbarOpen: false,
  snackbarMessage: '',
  snackbarType: 'info',
}

const snackBarSlice = createSlice({
  name: 'snackBar',
  initialState,
  reducers: {
    setSnackbarInfo(
      state,
      action: {
        payload: {
          snackbarOpen: boolean
          snackbarMessage: string
          snackbarType: 'error' | 'warning' | 'info' | 'success'
        }
      },
    ) {
      state.snackbarOpen = action.payload.snackbarOpen
      state.snackbarMessage = action.payload.snackbarMessage
      state.snackbarType = action.payload.snackbarType
    },
    showSnackBar(state, action) {
      state.snackbarOpen = action.payload
    },
    closeSnackbar(state, action) {
      state.snackbarOpen = action.payload
    },
  },
})

export default snackBarSlice
