import { combineReducers } from 'redux';
import countSlice from "./counterSlice"

const rootReducer = combineReducers({
    // state 관리
    
    // A고액분리기
    countSlice: countSlice.reducer,
    // B고액분리기
    // 저장탱크
    // 발효건조기

    // ----고액분리기 설정화면----
    // 고액분리기 세부설정
    // 고액분리기 설정값변경
    // 고액분리기 Hz 설정

    // ----시간세척 설정화면----
    // 시간세척 메인설정
    // 시간세척 설정

    // ----발효건조기 설정화면----
    // 발효건조기 메인설정
    // 발효건조기 시간세척A설정
    // 발효건조기 시간세척B설정

    //----적산전력 기록화면----
    // 적산전력 시간세척설정A
    // 적산전력 시간세척설정B
    // 적산전력 시간세척설정C
    // 적산전력 시간세척설정D


});

export default rootReducer;