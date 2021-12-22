import { createSlice } from '@reduxjs/toolkit';
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
    //발효건조기 설정화면
    //메인설정---------------------------------------
    // 역회전 미사용선택
    reverseTurnMain: boolean;
    // 배출예약 미사용
    outputReserve: boolean;
    // 수중 PUMP 상시가동
    waterPump: boolean;

    //시간세척 설정화면 A---------------------------------------
    //발효건조기 교반기 가동시간 설정
    driveTime: number;
    //발효건조기 교반기 정지시간 설정
    stopTime: number;
    //분진제거 밸브ON 유지시간
    valveOnTime: number;
    //분진제거 밸브OFF 유지시간
    valveOffTime: number;
    //교반기가동전 송풍기 ON시간설정
    prePumpOnTime: number;
    //배출스크류 역회전 ON 시간설정
    reverseTurnOnTime: number;
    //배출스크류 역회전 OFF 시간설정
    reverseTurnOffTime: number;

    //시간세척 설정화면 B---------------------------------------
    //발효건조기 현재온도
    currentTemp: number;
    //발효건조기 가열온도 설정
    heatingTemp: number;
    //발효건조기 가열편차온도 설정
    heatingRange: number;
    //배출예약 대기시간 설정
    reserveTime: number;
    //배출예약 진행시간 표시
    reserveTimeDisplay: number;
    //수중 PUMP 가동 시간설정
    waterPumpTime: number;
    //수중 PUMP 정시 시간설정
    waterPumpTimeDisplay: number;
    //LOW
    lowRangeSpeed: number;
    //HIGH
    highRangeSpeed: number;
};

const initialState: InitialState = {
    reverseTurnMain: false,
    outputReserve: false,
    waterPump: false,

    driveTime: 34,
    stopTime: 14,
    valveOnTime: 84,
    valveOffTime: 75,
    prePumpOnTime: 24,
    reverseTurnOnTime: 36,
    reverseTurnOffTime: 43,

    currentTemp: 34,
    heatingTemp: 14,
    heatingRange: 84,
    reserveTime: 75,
    reserveTimeDisplay: 24,
    waterPumpTime: 36,
    waterPumpTimeDisplay: 43,
    lowRangeSpeed: 80,
    highRangeSpeed: 25,
};

console.log('자동운전 State 관리: ', initialState);

const  fermentDryState = createSlice({
    name: 'fermentDryState',
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

export default fermentDryState;
