import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../redux/LoginFormSlice'
import signupReducer from '../redux/signupSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        signup: signupReducer,
    },
})