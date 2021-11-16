import faker from "faker";
import { sample } from "lodash";
// utils
import { mockImgAvatar } from "../utils/mockImages";

// ----------------------------------------------------------------------

let randomNum = Math.random() * 10;

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  number: index,
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.jobTitle(),
  count: faker.random.number(),
  status: sample(["active", "banned"]),
  onTime: faker.date.weekday(),
  offTime: faker.date.weekday(),
}));

export default users;
