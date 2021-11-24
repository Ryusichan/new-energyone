import faker from "faker";
import { sample } from "lodash";
// utils
import { mockImgProduct } from "../utils/mockImages";

// ----------------------------------------------------------------------

const MAIN_SET = [
  { name: "저장탱크 수위 감지방식", value: true },
  { name: "A LINE HOLDING", value: true },
  { name: "B LINE HOLDING", value: true },
  { name: "오버플로워 센서작동", value: true },
];

const DETAIL_SET = [
  { name: "저장탱크 수위", value: 34 },
  { name: "START 수위설정", value: 28 },
  { name: "END 수위설정", value: 19 },
  { name: "비상위험 수위설정", value: 72 },
  { name: "비상비상 수위설정", value: 48 },
  { name: "비상 END 수위설정", value: 36 },
  { name: "오버플로워 가동시간 설정", value: 39 },
];

const HZ_SET = [
  { name: "A고액분리기 Hz설정(고속)", value: 34 },
  { name: "A고액분리기 Hz설정(저속)", value: 12 },
  { name: "B고액분리기 Hz설정(고속)", value: 84 },
  { name: "B고액분리기 Hz설정(저속)", value: 42 },
  { name: "A고액분리기 Hz설정(고속세척)", value: 73 },
  { name: "A고액분리기 Hz설정(저속세척)", value: 24 },
  { name: "B고액분리기 Hz설정(고속세척)", value: 34 },
  { name: "B고액분리기 Hz설정(저속세척)", value: 28 },
];

// ----------------------------------------------------------------------

export const hightMainSetList = [...Array(4)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: MAIN_SET[index].name,
    value: MAIN_SET[index].value,
  };
  // return <></>;
});

export const highDetailSetList = [...Array(7)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: DETAIL_SET[index].name,
    value: DETAIL_SET[index].value,
  };
  // return <></>;
});

export const highHZSetList = [...Array(8)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: HZ_SET[index].name,
    value: HZ_SET[index].value,
  };
  // return <></>;
});

export default hightMainSetList;
