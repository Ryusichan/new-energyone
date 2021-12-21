import { combineReducers } from 'redux';

import autoSlice from "./autoSlice"
import highSlice from "./highSlice"
import timeSlice from "./timeSlice"
import fermentDrySlice from "./fermentDrySlice"
import intergratedPowerSlice from "./intergratedPowerSlice"

const rootReducer = combineReducers({
    // state 관리
    
    // 자동운전화면 + 수동운전화면
    autoSlice: autoSlice.reducer,
    // 고액분리기 설정화면
    highSlice: highSlice.reducer,
    // 시간세척 설정화면
    timeSlice: timeSlice.reducer,
    // 발효건조기 설정화면
    fermentDrySlice: fermentDrySlice.reducer,
    // 적산전력 기록화면
    intergratedPowerSlice: intergratedPowerSlice.reducer,

});

export default rootReducer;