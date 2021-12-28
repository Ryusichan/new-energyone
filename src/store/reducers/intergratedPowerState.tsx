import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  //적산전력 기록화면
  //적산전력
  integratedPower: Array<{
    id: string;
    name: string;
    value: number;
    unit: string;
  }>;

  //상간전압
  upperVoltage: Array<{
    id: string;
    name: string;
    value: number;
    unit: string;
  }>;

  //상전압
  upVoltage: Array<{ id: string; name: string; value: number; unit: string }>;

  //상전전류
  upPowerVoltage: Array<{
    id: string;
    name: string;
    value: number;
    unit: string;
  }>;
};

const initialState: InitialState = {
  integratedPower: [
    { id: "totalValidPower", name: "전체유효전력", value: 34, unit: "V" },
    { id: "averagePower", name: "평균역률", value: 14, unit: "PF" },
    { id: "frequency", name: "주파수", value: 24, unit: "HZ" },
    { id: "validPower", name: "유효전력량", value: 84, unit: "KWH" },
  ],

  upperVoltage: [
    { id: "rsUpperVoltage", name: "RS 상간전압", value: 395, unit: "V" },
    { id: "stUpperVoltage", name: "ST 상간전압", value: 413, unit: "V" },
    { id: "trUpperVoltage", name: "TR 상간전압", value: 421, unit: "V" },
  ],

  upVoltage: [
    { id: "rUpperVoltage", name: "R 상전압", value: 227, unit: "V" },
    { id: "sUpperVoltage", name: "S 상전압", value: 413, unit: "V" },
    { id: "tUpperVoltage", name: "T 상전압", value: 421, unit: "V" },
  ],

  upPowerVoltage: [
    { id: "rUpperCurrent", name: "R 상전류값", value: 0.1, unit: "A" },
    { id: "sUpperCurrent", name: "S 상전류값", value: 0, unit: "A" },
    { id: "tUpperCurrent", name: "T 상전류값", value: 0.4, unit: "A" },
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
