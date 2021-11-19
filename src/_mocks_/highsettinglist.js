import faker from "faker";
import { sample } from "lodash";

const highsetting = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
  };
});

export default highsetting;
