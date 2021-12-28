import { createSlice } from "@reduxjs/toolkit";
// import { increaseAsync, decreaseAsync } from './actions/counterActions';

type InitialState = {
  //고액분리기 설정화면---------------------------------------
  //------------GROUP A--------------------
  //메인설정
  highSeperatorMain: Array<{ id: string; name: string; value: boolean }>;
  //고액분리기 세부설정
  highSeperatorDetail: Array<{
    id: string;
    name: string;
    value: number;
    unit: string;
  }>;
  //고액분리기 HZ설정
  highSeperatorHZset: Array<{
    id: string;
    name: string;
    value: number;
    unit: string;
  }>;
};

const initialState: InitialState = {
  highSeperatorMain: [
    {
      id: "tankLevelDetectMethod",
      name: "저장탱크 수위 감지방식",
      value: false,
    },
    { id: "aLineHolding", name: "A LINE HOLDING", value: false },
    { id: "bLineHolding", name: "B LINE HOLDING", value: false },
    { id: "overFlowSensor", name: "오버플로워 센서작동", value: false },
  ],

  highSeperatorDetail: [
    { id: "startLevel", name: "START 수위설정", value: 14, unit: "%" },
    { id: "endLevel", name: "END 수위설정", value: 24, unit: "%" },
    { id: "dangerLevel", name: "비상위험 수위설정", value: 84, unit: "%" },
    {
      id: "dangerDangerLevel",
      name: "비상비상 수위설정",
      value: 25,
      unit: "%",
    },
    { id: "dangerEndLevel", name: "비상 END 수위설정", value: 43, unit: "%" },
    {
      id: "overFlowTime",
      name: "오버플로워 가동시간 설정",
      value: 67,
      unit: "S",
    },
  ],

  highSeperatorHZset: [
    {
      id: "aHighSpeedHz",
      name: "A고액분리기 HZ설정(고속)",
      value: 12,
      unit: "HZ",
    },
    {
      id: "aLowSpeedHz",
      name: "A고액분리기 HZ설정(저속)",
      value: 48,
      unit: "HZ",
    },
    {
      id: "bHighSpeedHz",
      name: "B고액분리기 HZ설정(고속)",
      value: 80,
      unit: "HZ",
    },
    {
      id: "bLowSpeedHz",
      name: "B고액분리기 HZ설정(저속)",
      value: 12,
      unit: "HZ",
    },
    {
      id: "aHighSpeedCleanHz",
      name: "A고액분리기 HZ설정(고속세척)",
      value: 54,
      unit: "HZ",
    },
    {
      id: "aLowSpeedCleanHz",
      name: "A고액분리기 HZ설정(저속세척)",
      value: 73,
      unit: "HZ",
    },
    {
      id: "bHighSpeedCleanHz",
      name: "B고액분리기 HZ설정(고속세척)",
      value: 34,
      unit: "HZ",
    },
    {
      id: "bLowSpeedCleanHz",
      name: "B고액분리기 HZ설정(저속세척)",
      value: 84,
      unit: "HZ",
    },
  ],
};

const highSeperatorDetailState = createSlice({
  name: "highSeperatorDetailState",
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

export default highSeperatorDetailState;
