import { createSlice } from '@reduxjs/toolkit';
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
    count: number;
};

const initialState: InitialState = {
    count: 0,
};

const  countSlice = createSlice({
    name: 'countSlice',
    initialState,
    reducers: {
        increase: (state, action) => {
            state.count = state.count + action.payload;
        },
        decrease: (state, action) => {
            state.count = state.count - action.payload;
        }
    }
});

export default countSlice;
