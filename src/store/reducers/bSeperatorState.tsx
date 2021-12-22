import { createSlice } from '@reduxjs/toolkit';
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
    // B흡입펌프
    binletPump: boolean;
    // B고액분리기
    bhighSeparator: boolean;
    // B고속
    bhighSpeed: boolean;
    // B저속
    blowSpeed: boolean;
    // B배수펌프
    boutletPump: boolean;
    // B세척밸브
    bcleanValve: boolean;

};

const initialState: InitialState = {
    binletPump: true,
    bhighSeparator: false,
    bhighSpeed: true,
    blowSpeed: true,
    boutletPump: true,
    bcleanValve: true,
};

console.log('B고액분리기 State 관리: ', initialState);

const  bSeperatorState = createSlice({
    name: 'bSeperatorState',
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

export default bSeperatorState;
