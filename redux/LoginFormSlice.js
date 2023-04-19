// loginSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for handling login API call
export const loginUser = createAsyncThunk(
    'login/loginUser',
    async (loginData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'https://staging-be-ecom.techserve4u.com/api/user/signin',
                loginData
            );
            // Handle successful login
            return response.data;
        } catch (error) {
            // Handle login failure and provide error message
            return rejectWithValue(error.response.data);
        }
    }
);

// Redux slice for login state
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default loginSlice.reducer;
