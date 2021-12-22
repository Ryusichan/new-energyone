import { createSlice } from '@reduxjs/toolkit';
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
    // A수중펌프
    awaterPump: boolean;
    // B수중펌프
    bwaterPump: boolean;
    // A전자밸브
    aelectroValve: boolean;
    // B전자밸브
    belectroValve: boolean;
    // 오버플러워
    overFlow: boolean;
};

const initialState: InitialState = {
    awaterPump: false,
    bwaterPump: true,
    aelectroValve: false,
    belectroValve: true,
    overFlow: false,
};

console.log('자동운전 State 관리: ', initialState);

const  saveTankState = createSlice({
    name: 'saveTankState',
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

export default saveTankState;
