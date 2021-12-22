import { createSlice } from '@reduxjs/toolkit';
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
    //A,B 고액분리기---------------------------------------
    // 고액분리기 상태
    highSeparator: boolean;
    // 발효건조기 상태
    fermentDry: boolean;
    // A흡입펌프
    ainletPump: boolean;
    // B흡입펌프
    binletPump: boolean;
    // A고액분리기
    ahighSeparator: boolean;
    // B고액분리기
    bhighSeparator: boolean;
    // A고속
    ahighSpeed: boolean;
    // B고속
    bhighSpeed: boolean;
    // A저속
    alowSpeed: boolean;
    // B저속
    blowSpeed: boolean;
    // A배수펌프
    aoutletPump: boolean;
    // B배수펌프
    boutletPump: boolean;
    // A세척밸브
    acleanValve: boolean;
    // B세척밸브
    bcleanValve: boolean;
    // 저장탱크 ---------------------------------------
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
    // 발효건조기 ---------------------------------------
    // 교반기정회전
    systemTurn: boolean;
    // 교반기역회전
    systemRturn: boolean;
    // 배출정회전
    dischargeTurn: boolean;
    // 배출역회전
    dischargeRturn: boolean;
    // 분진제거밸브
    removeValve: boolean;
    // 배기팬
    dischargeFan: boolean;
    // 배기밸브
    dischargeValve: boolean;
    // 배출예약 SV
    dischargeReserveSV: number;
    // 배출예약 PV
    dischargeReservePV: number;

};

const initialState: InitialState = {
    highSeparator: true,
    fermentDry: false,
    ainletPump: false,
    binletPump: true,
    ahighSeparator: false,
    bhighSeparator: false,
    ahighSpeed: false,
    bhighSpeed: true,
    alowSpeed: false,
    blowSpeed: true,
    aoutletPump: false,
    boutletPump: true,
    acleanValve: false,
    bcleanValve: true,
    awaterPump: false,
    bwaterPump: true,
    aelectroValve: false,
    belectroValve: true,
    overFlow: false,
    systemTurn: false,
    systemRturn: true,
    dischargeTurn: false,
    dischargeRturn: true,
    removeValve: false,
    dischargeFan: false,
    dischargeValve: false,
    dischargeReserveSV: 720,
    dischargeReservePV: 20,
};

console.log('자동운전 State 관리: ', initialState);

const  autoSlice = createSlice({
    name: 'autoSlice',
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

export default autoSlice;
