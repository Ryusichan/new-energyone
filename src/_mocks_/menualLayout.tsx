import faker from "faker";

// ----------------------------------------------------------------------

const SAVETANK = [
  { name: "배기FAN", value: true },
  { name: "배기밸브", value: false },
  { name: "A수중PUMP", value: true },
  { name: "A전자밸브", value: true },
  { name: "B수중PUMP", value: false },
  { name: "분진제거밸브", value: false },
];

const SEPERATOR = [
  { name: "A고액분리기", value: true },
  { name: "A흡입PUMP", value: true },
  { name: "A수중PUMP", value: false },
  { name: "A배수PUMP", value: true },
  { name: "B고액분리기", value: true },
  { name: "B흡입PUMP", value: false },
  { name: "B배수PUMP", value: false },
];

const FERMENTATION = [
  { name: "교반기정회전", value: true },
  { name: "교반기역회전", value: false },
  { name: "배출정회전", value: true },
  { name: "배출역회전", value: true },
  { name: "발효건조가열", value: false },
  { name: "A LINE 세적 SOL", value: true },
  { name: "B LINE 세적 SOL", value: true },
];

// ----------------------------------------------------------------------

export const menualSaveTank = [...Array(5)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: SAVETANK[index].name,
    value: SAVETANK[index].value,
  };
});

export const menualSeperator = [...Array(6)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: SEPERATOR[index].name,
    value: SEPERATOR[index].value,
  };
});

export const menualFermentation = [...Array(6)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    name: FERMENTATION[index].name,
    value: FERMENTATION[index].value,
  };
});
