import { combineReducers } from "redux";

import aSeperatorState from "./aSeperatorState";
import bSeperatorState from "./bSeperatorState";
import saveTankState from "./saveTankState";
import fermenterState from "./fermenterState";
import autoDetailState from "./autoDetailState";
import highSeperatorDetailState from "./highSeperatorDetailState";
import timeWashState from "./timeWashState";
import fermentDryState from "./fermentDryState";
import intergratedPowerState from "./intergratedPowerState";

import snackbarSlice from "./snackBarSlice";
import dialogSlice from "./dialogSlice";

const rootReducer = combineReducers({
  // state 관리

  // A 고액분리기
  aSeperatorState: aSeperatorState.reducer,
  // B 고액분리기
  bSeperatorState: bSeperatorState.reducer,
  // 저장탱크
  saveTankState: saveTankState.reducer,
  // 발효건조기
  fermenterState: fermenterState.reducer,
  // 자동운전세부항목
  autoDetailState: autoDetailState.reducer,
  // 고액분리기 세부설정
  highSeperatorDetailState: highSeperatorDetailState.reducer,
  // 시간세척 설정화면
  timeWashState: timeWashState.reducer,
  // 발효건조기 설정화면
  fermentDryState: fermentDryState.reducer,
  // 적산전력 기록화면
  intergratedPowerState: intergratedPowerState.reducer,

  //snack bar
  snackbar: snackbarSlice.reducer,
  //dialog
  dialog: dialogSlice.reducer,
});

export default rootReducer;
