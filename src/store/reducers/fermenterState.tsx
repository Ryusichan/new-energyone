import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  //발효건조기
  autoFermenTationArray: Array<{ id: string; name: string; value: boolean }>;
};

const initialState: InitialState = {
  autoFermenTationArray: [
    { id: "systemTurn", name: "교반기정회전", value: true },
    { id: "systemRturn", name: "교반기역회전", value: false },
    { id: "outputTrun", name: "배출정회전", value: true },
    { id: "outputRturn", name: "배출역회전", value: true },
    { id: "dustDeleteValve", name: "분진제거밸브", value: false },
    { id: "emissionFan", name: "배기FAN", value: true },
    { id: "emissionValve", name: "배기밸브", value: true },
  ],
};

const fermenterState = createSlice({
  name: "fermenterState",
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

export default fermenterState;
