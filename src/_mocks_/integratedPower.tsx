import faker from "faker";

// ----------------------------------------------------------------------

const INTEPOVER = [
  { name: "전체유효전력", value: 34 },
  { name: "평균역률", value: 14 },
  { name: "주파수", value: 24 },
  { name: "유효전력량", value: 84 },
];

const INTEMVOLTAGE = [
  { name: "RS 상간전압", value: 395.5 },
  { name: "ST 상간전압", value: 413.5 },
  { name: "TR 상간전압", value: 421.5 },
];

const INTEVOLTAGE = [
  { name: "R 상전압", value: 227.5 },
  { name: "S 상전압", value: 413.5 },
  { name: "T 상전압", value: 421.5 },
];

const INTEVALUE = [
  { name: "R 상전류값", value: 0.1 },
  { name: "S 상전류값", value: 0.0 },
  { name: "T 상전류값", value: 0.4 },
];

// ----------------------------------------------------------------------

export const intePower = [...Array(4)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: INTEPOVER[index].name,
    value: INTEPOVER[index].value,
  };
});

export const inteMvoltage = [...Array(3)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: INTEMVOLTAGE[index].name,
    value: INTEMVOLTAGE[index].value,
  };
});

export const inteVoltage = [...Array(3)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: INTEVOLTAGE[index].name,
    value: INTEVOLTAGE[index].value,
  };
});

export const inteValue = [...Array(3)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: INTEVALUE[index].name,
    value: INTEVALUE[index].value,
  };
});
