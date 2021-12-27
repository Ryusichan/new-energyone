import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  // B 고액분리기
  bSeperatorArray: Array<{ id: string; name: string; value: boolean }>;
};

const initialState: InitialState = {
  bSeperatorArray: [
    { id: "binletPump", name: "B흡입펌프", value: false },
    { id: "bhighSeparator", name: "B고액분리기", value: true },
    { id: "bhighSpeed", name: "B고속", value: true },
    { id: "bslowSpeed", name: "B저속", value: false },
    { id: "boutletPump", name: "B배수펌프", value: true },
    { id: "bcleanValve", name: "B세척밸브", value: false },
  ],
};

const bSeperatorState = createSlice({
  name: "bSeperatorState",
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

export default bSeperatorState;
