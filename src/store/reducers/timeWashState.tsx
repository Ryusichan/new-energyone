import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  //메인설정---------------------------------------
  timeWashMain: Array<{ id: string; name: string; value: boolean }>;

  //시간세척 설정------------------------------------
  timeWashTimeSet: Array<{
    id: string;
    name: string;
    value: number;
    unit: string;
  }>;
};

const initialState: InitialState = {
  timeWashMain: [
    { id: "aClean", name: "A LINE 세척", value: false },
    { id: "bClean", name: "B LINE 세척", value: true },
    { id: "aHighSeparator", name: "A 고액분리기", value: false },
    { id: "bHighSeparator", name: "B 고액분리기", value: true },
  ],

  timeWashTimeSet: [
    {
      id: "manualPumpTime",
      name: "수동PUMP 가동시간 설정",
      value: 0,
      unit: "%",
    },
    {
      id: "inletPumpDelayTime",
      name: "흡입PUMP 가동지연 시간 설정",
      value: 0,
      unit: "%",
    },
    {
      id: "highSeparatorDelayTime",
      name: "고액분리기 가동시연 시간 설정",
      value: 0,
      unit: "%",
    },
    {
      id: "highSeparatorOffTime",
      name: "고액분리기 OFF지연 시간 설정",
      value: 0,
      unit: "%",
    },
    {
      id: "outletPumpDelayTime",
      name: "배수 PUMP 가동지연 시간 설정",
      value: 0,
      unit: "%",
    },
    {
      id: "highSpeedTime",
      name: "고액분리기 고속시간 설정",
      value: 0,
      unit: "%",
    },
    {
      id: "lowSpeedTime",
      name: "고액분리기 저속시간 설정",
      value: 0,
      unit: "S",
    },
    {
      id: "outletPumpEndTime",
      name: "배수 PUMP END 시간 설정",
      value: 0,
      unit: "%",
    },
    { id: "autoCleanCount", name: "자동세척 횟수 설정", value: 0, unit: "%" },
    { id: "autoCleanTime", name: "자동세척 시간 설정", value: 0, unit: "S" },
  ],
};

const timeWashState = createSlice({
  name: "timeWashState",
  initialState,
  reducers: {
    setToggleSelect: (state: any, action) => {
      const { name, newValue } = action.payload;

      console.log("리덕스 들어온값: ", name, newValue);

      state[name] = newValue;
    },
    // increase: (state, action) => {
    //     state.ainletPump = state.ainletPump + action.payload;
    // },
    // decrease: (state, action) => {
    //     state.ainletPump = state.ainletPump - action.payload;
    // }
  },
});

export default timeWashState;
