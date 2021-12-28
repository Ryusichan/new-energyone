import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  //발효건조기 설정화면
  //메인설정
  fermentMain: Array<{ id: string; name: string; value: boolean }>;

  //발효건조기 세부설정01
  fermentDetail01: Array<{ id: string; name: string; value: number }>;

  //발효건조기 세부설정02
  fermentDetail02: Array<{ id: string; name: string; value: number }>;
};

const initialState: InitialState = {
  fermentMain: [
    { id: "reverseTurnMain", name: "역회전 미사용선택", value: false },
    { id: "outputReserve", name: "배출예약 미사용", value: false },
    { id: "waterPump", name: "수중 PUMP 상시가동", value: false },
  ],

  fermentDetail01: [
    { id: "driveTime", name: "발효건조기 교반기 가동시간 설정", value: 34 },
    { id: "stopTime", name: "발효건조기 교반기 정지시간 설정", value: 17 },
    { id: "valveOnTime", name: "분진제거 밸브ON 유지시간", value: 85 },
    { id: "valveOffTime", name: "분진제거 밸브OFF 유지시간", value: 75 },
    { id: "prePumpOnTime", name: "교반기가동전 송풍기 ON시간설정", value: 46 },
    {
      id: "reverseTurnOnTime",
      name: "배출스크류 역회전 ON 시간설정",
      value: 65,
    },
    {
      id: "reverseTurnOffTime",
      name: "배출스크류 역회전 OFF 시간설정",
      value: 52,
    },
  ],

  fermentDetail02: [
    { id: "currentTemp", name: "발효건조기 현재온도", value: 14 },
    { id: "heatingTemp", name: "발효건조기 가열온도 설정", value: 27 },
    { id: "heatingRange", name: "발효건조기 가열편차온도 설정", value: 84 },
    { id: "reserveTime", name: "배출예약 대기시간 설정", value: 46 },
    { id: "reserveTimeDisplay", name: "배출예약 진행시간 표시", value: 67 },
    { id: "waterPumpTime", name: "수중 PUMP 가동 시간설정", value: 84 },
    { id: "waterPumpTimeDisplay", name: "수중 PUMP 정시 시간설정", value: 32 },
    { id: "lowRangeSpeed", name: "LOW", value: 70 },
    { id: "highRangeSpeed", name: "HIGH", value: 13 },
  ],
};

const fermentDryState = createSlice({
  name: "fermentDryState",
  initialState,
  reducers: {
    setToggleSelect: (state: any, action) => {
      const { name, newValue } = action.payload;

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

export default fermentDryState;
