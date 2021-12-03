import faker from "faker";

// ----------------------------------------------------------------------

const SAVETANK = [
  { name: "A수중PUMP", value: true },
  { name: "B수중PUMP", value: false },
  { name: "A전자밸브", value: true },
  { name: "B전자밸브", value: true },
  { name: "오버플로워", value: false },
];

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

const FERMENTATION = [
  { name: "교반기정회전", value: true },
  { name: "교반기역회전", value: false },
  { name: "배출정회전", value: true },
  { name: "배출역회전", value: true },
  { name: "분진제거밸브", value: false },
  { name: "배기FAN", value: true },
  { name: "배기밸브", value: true },
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

// export const autoSaveTank = [...Array(5)].map((_, index) => {
//   return {
//     id: faker.datatype.uuid(),
//     name: SAVETANK[index].name,
//     value: SAVETANK[index].value,
//   };
// });

// export const autoFermentation = [...Array(7)].map((_, index) => {
//   return {
//     id: faker.datatype.uuid(),
//     name: FERMENTATION[index].name,
//     value: FERMENTATION[index].value,
//   };
// });
