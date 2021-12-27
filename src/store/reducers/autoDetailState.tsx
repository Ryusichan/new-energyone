import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  // 배출예약 SV
  dischargeReserveSV: number;
  // 배출예약 PV
  dischargeReservePV: number;
  // 저장탱크 수위
  storageTankLevel: number;
};

const initialState: InitialState = {
  dischargeReserveSV: 720,
  dischargeReservePV: 20,
  storageTankLevel: 64,
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
