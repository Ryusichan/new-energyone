import { createSlice } from '@reduxjs/toolkit';
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
    //고액분리기 세부설정---------------------------------------
    //------------GROUP A--------------------
    //저장탱크 수위 감지방식
    tankLevelDetectMethod: boolean;
    //A LINE HOLDING
    aLineHolding: boolean;
    //B LINE HOLDING
    bLineHolding: boolean;
    //오버플로워 센서작동
    overFlowSensor: boolean;
    //강제배출
    forceDischarge: boolean;
    //------------GROUP B--------------------
    // 저장탱크 수위
    tankLevel: number;
    // START 수위설정
    startLevel: number;
    // END 수위설정
    endLevel: number;
    // 비상위험 수위설정
    dangerLevel: number;
    // 비상비상 수위설정
    dangerDangerLevel: number;
    // 비상 END 수위설정
    dangerEndLevel: number;
    // 오버플로워 가동시간 설정
    overFlowTime: number;
    //------------GROUP C--------------------
    // A고액분리기 HZ설정(고속)
    aHighSpeedHz: number;
    // A고액분리기 HZ설정(저속)
    aLowSpeedHz: number;
    // B고액분리기 HZ설정(고속)
    bHighSpeedHz: number;
    // B고액분리기 HZ설정(저속)
    bLowSpeedHz: number;
    // A고액분리기 HZ설정(고속세척)
    aHighSpeedCleanHz: number;
    // A고액분리기 HZ설정(저속세척)
    aLowSpeedCleanHz: number;
    // B고액분리기 HZ설정(고속세척)
    bHighSpeedCleanHz: number;
    // B고액분리기 HZ설정(저속세척)
    bLowSpeedCleanHz: number;
};

const initialState: InitialState = {
    tankLevelDetectMethod: true,
    aLineHolding: false,
    bLineHolding: true,
    overFlowSensor: false,
    forceDischarge: false,

    tankLevel: 34,
    startLevel: 28,
    endLevel: 19,
    dangerLevel: 72,
    dangerDangerLevel: 48,
    dangerEndLevel: 36,
    overFlowTime: 39,

    aHighSpeedHz: 34,
    aLowSpeedHz: 12,
    bHighSpeedHz: 84,
    bLowSpeedHz: 42,
    aHighSpeedCleanHz: 73,
    aLowSpeedCleanHz: 24,
    bHighSpeedCleanHz: 34,
    bLowSpeedCleanHz: 28,

};

console.log('자동운전 State 관리: ', initialState);

const  highSeperatorDetailState = createSlice({
    name: 'highSeperatorDetailState',
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

export default highSeperatorDetailState;
