import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  //저장탱크
  saveTankArray: Array<{ id: string; name: string; value: boolean }>;
};

const initialState: InitialState = {
  saveTankArray: [
    { id: "awaterPump", name: "A수중PUMP", value: true },
    { id: "bwaterPump", name: "B수중PUMP", value: false },
    { id: "aelectroValve", name: "A전자밸브", value: true },
    { id: "belectroValve", name: "B전자밸브", value: true },
    { id: "overFlow", name: "오버플로워", value: false },
  ],
};

const saveTankState = createSlice({
  name: "saveTankState",
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

export default saveTankState;
