import { createSlice } from '@reduxjs/toolkit';
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
    //A,B 고액분리기---------------------------------------
    // A흡입펌프
    ainletPump: boolean;
    // A고액분리기
    ahighSeparator: boolean;
    // A고속
    ahighSpeed: boolean;
    // A저속
    alowSpeed: boolean;
    // A배수펌프
    aoutletPump: boolean;
    // A세척밸브
    acleanValve: boolean;
};

const initialState: InitialState = {
    ainletPump: false,
    ahighSeparator: false,
    ahighSpeed: false,
    alowSpeed: false,
    aoutletPump: false,
    acleanValve: false,
};

console.log('A고액분리기 State 관리: ', initialState);

const  aSeperatorState = createSlice({
    name: 'aSeperatorState',
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

export default aSeperatorState;
