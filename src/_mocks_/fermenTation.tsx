import faker from "faker";

// ----------------------------------------------------------------------

const FERMENMAINSET = [
  { name: "역회전 미사용선택", value: true },
  { name: "배출예약 미사용", value: true },
  { name: "수중 PUMP 상시가동", value: false },
];

const FERMENDETAIL01 = [
  { name: "발효건조기 교반기 가동시간 설정", value: 34 },
  { name: "발효건조기 교반기 정지시간 설정", value: 14 },
  { name: "분진제거 밸브ON 유지시간", value: 84 },
  { name: "분진제거 밸브OFF 유지시간", value: 75 },
  { name: "교반기가동전 송풍기 ON시간설정", value: 24 },
  { name: "배출스크류 역회전 ON 시간설정", value: 36 },
  { name: "배출스크류 역회전 OFF 시간설정", value: 43 },
];

const FERMENDETAIL02 = [
  { name: "발효건조기 현재온도", value: 34 },
  { name: "발효건조기 가열온도 설정", value: 14 },
  { name: "발효건조기 가열편차온도 설정", value: 84 },
  { name: "배출예약 대기시간 설정", value: 75 },
  { name: "배출예약 진행시간 표시", value: 24 },
  { name: "수중 PUMP 가동 시간설정", value: 36 },
  { name: "수중 PUMP 정시 시간설정", value: 43 },
  { name: "LOW", value: 80 },
  { name: "HIGH", value: 25 },
];

// ----------------------------------------------------------------------

export const fermenMainset = [...Array(3)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: FERMENMAINSET[index].name,
    value: FERMENMAINSET[index].value,
  };
});

export const fermenDetail01 = [...Array(7)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: FERMENDETAIL01[index].name,
    value: FERMENDETAIL01[index].value,
  };
});

export const fermenDetail02 = [...Array(9)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: FERMENDETAIL02[index].name,
    value: FERMENDETAIL02[index].value,
  };
});
