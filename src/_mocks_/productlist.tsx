import faker from "faker";

const Products = [
  {
    location: "대한민국 하남시",
    name: "고덕 센트럴 아이파크",
    date: "2020.09.13",
    lateTime: "324DAY",
    level: 24,
  },
  {
    location: "대한민국 서울시",
    name: "명일 자이아파트",
    date: "2020.08.13",
    lateTime: "74DAY",
    level: 14,
  },
  {
    location: "대한민국 수원시",
    name: "리엔파크 3단지 아파트",
    date: "2021.09.13",
    lateTime: "14DAY",
    level: 44,
  },
  {
    location: "대한민국 하남시",
    name: "고덕 그라시움",
    date: "2019.03.13",
    lateTime: "38DAY",
    level: 20,
  },
  {
    location: "대한민국 서울시",
    name: "레미안 솔베뉴",
    date: "2014.09.13",
    lateTime: "24DAY",
    level: 27,
  },
  {
    location: "대한민국 용인시",
    name: "명일 주공 9단지 아파트",
    date: "2022.08.13",
    lateTime: "17DAY",
    level: 74,
  },
  {
    location: "대한민국 마산시",
    name: "강동 롯데캐슬퍼스트",
    date: "2020.09.12",
    lateTime: "424DAY",
    level: 14,
  },
  {
    location: "대한민국 부산시",
    name: "고덕 센트럴 아이파크",
    date: "2020.09.03",
    lateTime: "175DAY",
    level: 64,
  },
  {
    location: "대한민국 대전광역시",
    name: "고덕 센트럴 아이파크",
    date: "2020.09.13",
    lateTime: "723DAY",
    level: 34,
  },
  {
    location: "대한민국 서울시",
    name: "레미안 솔베뉴",
    date: "2020.09.13",
    lateTime: "324DAY",
    level: 20,
  },
  {
    location: "대한민국 수원시",
    name: "고덕 센트럴 아이파크",
    date: "2020.09.03",
    lateTime: "324DAY",
    level: 34,
  },
  {
    location: "대한민국 하남시",
    name: "고덕 자이",
    date: "2020.09.13",
    lateTime: "324DAY",
    level: 74,
  },
  {
    location: "대한민국 하남시",
    name: "센트럴 포레",
    date: "2020.09.13",
    lateTime: "324DAY",
    level: 54,
  },
  {
    location: "대한민국 부산시",
    name: "센트럴 아이파크",
    date: "2020.09.13",
    lateTime: "324DAY",
    level: 64,
  },
  {
    location: "대한민국 하남시",
    name: "성남 자이",
    date: "2020.09.13",
    lateTime: "324DAY",
    level: 84,
  },
  {
    location: "대한민국 서울시",
    name: "센트럴 하이빌",
    date: "2020.09.13",
    lateTime: "324DAY",
    level: 94,
  },
  {
    location: "대한민국 용인시",
    name: "고덕 센트럴 아이파크",
    date: "2020.09.13",
    lateTime: "324DAY",
    level: 14,
  },
  {
    location: "대한민국 성남시",
    name: "용인 아이파크",
    date: "2020.09.13",
    lateTime: "324DAY",
    level: 28,
  },
  {
    location: "대한민국 하남시",
    name: "레미안 아이파크",
    date: "2020.09.13",
    lateTime: "324DAY",
    level: 24,
  },
];

// ----------------------------------------------------------------------

let randomNum = Math.random() * 100;

const users = [...Array(19)].map((_, index) => ({
  id: faker.datatype.uuid(),
  location: Products[index].location,
  name: Products[index].name,
  number: index + 1,
  count: faker.random.number(),
  contractdate: Products[index].date,
  AccumulatedTime: Products[index].lateTime,
  tankLevel: Products[index].level,
}));

export default users;
