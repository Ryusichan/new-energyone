import { createSlice } from '@reduxjs/toolkit';
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
    //메인설정---------------------------------------
    // A LINE 세척
    aClean: boolean;
    // B LINE 세척
    bClean: boolean;
    // A 고액분리기
    aHighSeparator: boolean;
    // B 고액분리기
    bHighSeparator: boolean;

    //시간세척 설정------------------------------------
    //수동PUMP 가동시간설정
    manualPumpTime: number;
    //흡입PUMP 가동지연 시간설정
    inletPumpDelayTime: number;
    //고액분리기 가동시연 시간설정
    highSeparatorDelayTime: number;
    //고액분리기 OFF지연 시간설정
    highSeparatorOffTime: number;
    //배수 PUMP 가동지연 시간설정
    outletPumpDelayTime: number;
    //고액분리기 고속시간 설정
    highSpeedTime: number;
    //고액분리기 저속시간 설정
    lowSpeedTime: number;
    //배수 PUMP END 시간 설정
    outletPumpEndTime: number;
    //자동세척 횟수 설정
    autoCleanCount: number;
    //자동세척 시간 설정
    autoCleanTime: number;
};

const initialState: InitialState = {
    aClean: false,
    bClean: false,
    aHighSeparator: false,
    bHighSeparator: false,

    manualPumpTime: 34,
    inletPumpDelayTime: 14,
    highSeparatorDelayTime: 84,
    highSeparatorOffTime: 75,
    outletPumpDelayTime: 24,
    highSpeedTime: 36,
    lowSpeedTime: 43,
    outletPumpEndTime: 80,
    autoCleanCount: 25,
    autoCleanTime: 15,
};

console.log('자동운전 State 관리: ', initialState);

const  timeWashState = createSlice({
    name: 'timeWashState',
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

export default timeWashState;
