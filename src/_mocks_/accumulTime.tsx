import faker from "faker";

// ----------------------------------------------------------------------

const deviceList = [
  {
    caption: "chapter01",
    name: "고액분리기 자동운전",
    accumulatedTime: "204Day 21Hour 49Min",
  },
  {
    caption: "chapter01",
    name: "배기FAN",
    accumulatedTime: "23Day 21Hour 49Min",
  },
  {
    caption: "chapter01",
    name: "배기밸브",
    accumulatedTime: "13Day 21Hour 49Min",
  },
  {
    caption: "chapter02",
    name: "A수중PUMP",
    accumulatedTime: "25Day 21Hour 49Min",
  },
  {
    caption: "chapter02",
    name: "B수중PUMP",
    accumulatedTime: "104Day 21Hour 49Min",
  },
  {
    caption: "chapter02",
    name: "분진제거밸브",
    accumulatedTime: "52Day 21Hour 49Min",
  },
  {
    caption: "chapter03",
    name: "A고액분리기",
    accumulatedTime: "64Day 21Hour 49Min",
  },
  {
    caption: "chapter03",
    name: "A흡입PUMP",
    accumulatedTime: "21Day 21Hour 49Min",
  },
  {
    caption: "chapter03",
    name: "A수중PUMP",
    accumulatedTime: "24Day 21Hour 49Min",
  },
  {
    caption: "chapter04",
    name: "A배수PUMP",
    accumulatedTime: "26Day 21Hour 49Min",
  },
  {
    caption: "chapter04",
    name: "B고액분리기",
    accumulatedTime: "74Day 21Hour 49Min",
  },
  {
    caption: "chapter04",
    name: "B흡입PUMP",
    accumulatedTime: "24Day 21Hour 49Min",
  },
  {
    caption: "chapter05",
    name: "B배수PUMP",
    accumulatedTime: "84Day 21Hour 49Min",
  },
  {
    caption: "chapter05",
    name: "교반기정회전",
    accumulatedTime: "124Day 21Hour 49Min",
  },
];

// let randomNum = Math.random() * 10;

const accumulTime = [...Array(14)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: deviceList[index].name,
  number: index + 1,
  count: faker.random.number(),
  contractdate: faker.date.month(),
  caption: deviceList[index].caption,
  accumulatedTime: deviceList[index].accumulatedTime,
}));

export default accumulTime;
