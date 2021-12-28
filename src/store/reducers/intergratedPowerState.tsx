import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  //적산전력 기록화면
  //적산전력
  integratedPower: Array<{ id: string; name: string; value: number }>;

  //상간전압
  upperVoltage: Array<{ id: string; name: string; value: number }>;

  //상전압
  upVoltage: Array<{ id: string; name: string; value: number }>;

  //상전전류
  upPowerVoltage: Array<{ id: string; name: string; value: number }>;
};

const initialState: InitialState = {
  integratedPower: [
    { id: "totalValidPower", name: "전체유효전력", value: 34 },
    { id: "averagePower", name: "평균역률", value: 14 },
    { id: "frequency", name: "주파수", value: 24 },
    { id: "validPower", name: "유효전력량", value: 84 },
  ],

  upperVoltage: [
    { id: "rsUpperVoltage", name: "RS 상간전압", value: 395 },
    { id: "stUpperVoltage", name: "ST 상간전압", value: 413 },
    { id: "trUpperVoltage", name: "TR 상간전압", value: 421 },
  ],

  upVoltage: [
    { id: "rUpperVoltage", name: "R 상전압", value: 227 },
    { id: "sUpperVoltage", name: "S 상전압", value: 413 },
    { id: "tUpperVoltage", name: "T 상전압", value: 421 },
  ],

  upPowerVoltage: [
    { id: "rUpperCurrent", name: "R 상전류값", value: 0.1 },
    { id: "sUpperCurrent", name: "S 상전류값", value: 0 },
    { id: "tUpperCurrent", name: "T 상전류값", value: 0.4 },
  ],
};

const intergratedPowerState = createSlice({
  name: "intergratedPowerState",
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

export default intergratedPowerState;
