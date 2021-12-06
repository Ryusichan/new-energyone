import faker from "faker";

// ----------------------------------------------------------------------

const ASEPERATOR = [
  { name: "A흡입PUMP", value: true },
  { name: "A고액분리기", value: true },
  { name: "A고속", value: false },
  { name: "A저속", value: true },
  { name: "A배수PUMP", value: true },
  { name: "A세척밸브", value: false },
];

const BSEPERATOR = [
  { name: "B흡입PUMP", value: true },
  { name: "B고액분리기", value: false },
  { name: "B고속", value: true },
  { name: "B저속", value: false },
  { name: "B배수PUMP", value: true },
  { name: "B세척밸브", value: true },
];

const MAINSET = [
  { name: "A LINE 세척", value: true },
  { name: "B LINE 세척", value: false },
  { name: "A 고액분리기", value: true },
  { name: "B 고액분리기", value: true },
];

const TIMEWASHSET = [
  { name: "수동PUMP 가동시간설정", value: 34 },
  { name: "흡입PUMP 가동지연 시간설정", value: 14 },
  { name: "고액분리기 가동시연 시간설정", value: 84 },
  { name: "고액분리기 OFF지연 시간설정", value: 75 },
  { name: "배수 PUMP 가동지연 시간설정", value: 24 },
  { name: "고액분리기 고속시간 설정", value: 36 },
  { name: "고액분리기 저속시간 설정", value: 43 },
  { name: "배수 PUMP END 시간 설정", value: 80 },
  { name: "자동세척 횟수 설정", value: 25 },
  { name: "자동세척 시간 설정", value: 15 },
];

// ----------------------------------------------------------------------

export const washAseperator = [...Array(6)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: ASEPERATOR[index].name,
    value: ASEPERATOR[index].value,
  };
});

export const washBseperator = [...Array(6)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: BSEPERATOR[index].name,
    value: BSEPERATOR[index].value,
  };
});

export const washMainset = [...Array(4)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: MAINSET[index].name,
    value: MAINSET[index].value,
  };
});

export const washTimeset = [...Array(10)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: TIMEWASHSET[index].name,
    value: TIMEWASHSET[index].value,
  };
});
