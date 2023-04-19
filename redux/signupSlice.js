import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

// Async thunk for handling signup API call
export const signupUser = createAsyncThunk(
    'signup/signupUser',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post('https://staging-be-ecom.techserve4u.com/api/user/signup', userData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Signup slice
export const signupSlice = createSlice({
    name: 'signup',
    initialState: { isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.isLoading = false;
                toast.success('successfully signup done');
                // Handle successful signup here, e.g. redirect or show success message
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                toast.error('something is wrong')
            });
    },
});

export default signupSlice.reducer;
