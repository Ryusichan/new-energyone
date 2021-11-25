import faker from "faker";

// ----------------------------------------------------------------------

let randomNum = Math.random() * 100;

const users = [...Array(16)].map((_, index) => ({
  id: faker.datatype.uuid(),
  location: faker.address.city(),
  name: faker.name.findName(),
  number: index + 1,
  count: faker.random.number(),
  contractdate: faker.date.month(),
  AccumulatedTime: faker.date.month(),
  tankLevel: Math.floor(randomNum) + 1 + index,
  onTime: faker.date.weekday(),
  offTime: faker.date.weekday(),
}));

export default users;
