import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  // 배출예약 SV
  dischargeReserveSV: { id: string; name: string; value: number };
  // 배출예약 PV
  dischargeReservePV: { id: string; name: string; value: number };
  // 저장탱크 수위
  storageTankLevel: { id: string; name: string; value: number };
  // 발효건조가열
  activationHeater: { id: string; name: string; value: boolean };
  // A LINE 세척 Sol
  aLineCleanSol: { id: string; name: string; value: boolean };
  // B LINE 세척 Sol
  bLineCleanSol: { id: string; name: string; value: boolean };
};

const initialState: InitialState = {
  dischargeReserveSV: {
    id: "dischargeReserveSV",
    name: "배출예약 SV",
    value: 720,
  },
  dischargeReservePV: {
    id: "dischargeReservePV",
    name: "배출예약 PV",
    value: 20,
  },
  storageTankLevel: {
    id: "storageTankLevel",
    name: "저장탱크 수위",
    value: 64,
  },
  activationHeater: {
    id: "activationHeater",
    name: "발효건조가열",
    value: false,
  },
  aLineCleanSol: { id: "aLineCleanSol", name: "A LINE 세척 Sol", value: false },
  bLineCleanSol: { id: "bLineCleanSol", name: "B LINE 세척 Sol", value: false },
};

const autoDetailState = createSlice({
  name: "autoDetailState",
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

export default autoDetailState;
