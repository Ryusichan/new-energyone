import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  //A 고액분리기
  aSeperatorArray: Array<{ id: string; name: string; value: boolean }>;
};

const initialState: InitialState = {
  aSeperatorArray: [
    { id: "ainletPump", name: "A흡입펌프", value: false },
    { id: "ahighSeparator", name: "A고액분리기", value: true },
    { id: "ahighSpeed", name: "A고속", value: true },
    { id: "aslowSpeed", name: "A저속", value: false },
    { id: "aoutletPump", name: "A배수펌프", value: true },
    { id: "acleanValve", name: "A세척밸브", value: false },
  ],
};

const aSeperatorState = createSlice({
  name: "aSeperatorState",
  initialState,
  reducers: {
    setToggleSelect: (state: any, action) => {
      const { name, newValue } = action.payload;

      state[name] = newValue;
    },
  },
});

export default aSeperatorState;
