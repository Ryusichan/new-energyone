import { createSlice } from '@reduxjs/toolkit';
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
    // 배출예약 SV
    dischargeReserveSV: number;
    // 배출예약 PV
    dischargeReservePV: number;
};

const initialState: InitialState = {
    dischargeReserveSV: 720,
    dischargeReservePV: 20,
};

console.log('자동운전 State 관리: ', initialState);

const  autoDetailState = createSlice({
    name: 'autoDetailState',
    initialState,
    reducers: {
        setToggleSelect: (state: any, action) => {
            
            const { name, newValue } = action.payload;

            console.log('리덕스 들어온값: ', name, newValue);

            
            state[name] = newValue;
        },
        // increase: (state, action) => {
        //     state.ainletPump = state.ainletPump + action.payload;
        // },
        // decrease: (state, action) => {
        //     state.ainletPump = state.ainletPump - action.payload;
        // }
    }
});

export default autoDetailState;
