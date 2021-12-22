import { createSlice } from '@reduxjs/toolkit';
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
    //적산전력 기록화면
    //전체유효전력
    totalValidPower: number;
    //평균역률
    averagePower: number;
    //주파수
    frequency: number;
    //유효전력량
    validPower: number;

    //RS 상간전압
    rsUpperVoltage: number;
    //ST 상간전압
    stUpperVoltage: number;
    //TR 상간전압
    trUpperVoltage: number;

    //R 상전압
    rUpperVoltage: number;
    //S 상전압
    sUpperVoltage: number;
    //T 상전압
    tUpperVoltage: number;

    //R 상전류값
    rUpperCurrent: number;
    //S 상전류값
    sUpperCurrent: number;
    //T 상전류값
    tUpperCurrent: number;
};

const initialState: InitialState = {
    totalValidPower: 34,
    averagePower: 14,
    frequency: 24,
    validPower: 84,

    rsUpperVoltage: 395,
    stUpperVoltage: 413,
    trUpperVoltage: 421,

    rUpperVoltage: 227,
    sUpperVoltage: 413,
    tUpperVoltage: 421,

    rUpperCurrent: 0.1,
    sUpperCurrent: 0,
    tUpperCurrent: 0.4,
};

console.log('자동운전 State 관리: ', initialState);

const  intergratedPowerState = createSlice({
    name: 'intergratedPowerState',
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

export default intergratedPowerState;
