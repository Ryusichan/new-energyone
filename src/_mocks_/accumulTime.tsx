import faker from "faker";

// ----------------------------------------------------------------------

// let randomNum = Math.random() * 10;

const accumulTime = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  location: faker.address.city(),
  name: faker.name.findName(),
  number: index + 1,
  count: faker.random.number(),
  contractdate: faker.date.month(),
  AccumulatedTime: faker.date.month(),
  tankLevel: faker.date.month(),
  onTime: faker.date.weekday(),
  offTime: faker.date.weekday(),
}));

export default accumulTime;
