import faker from "faker";

// ----------------------------------------------------------------------

const notificationRecord = [
  {
    name: "저장탱크 수위 감지방식",
    onTime: "2020/05/12 3시 08분",
    offTime: "2021/08/21 9시 21분",
    count: 1823,
  },
  {
    name: "A LINE HOLDING",
    onTime: "2020/02/12 3시 08분",
    offTime: "2021/06/21 9시 21분",
    count: 342,
  },
  {
    name: "B LINE HOLDING",
    onTime: "2020/01/12 3시 08분",
    offTime: "2021/03/21 9시 21분",
    count: 1232,
  },
  {
    name: "오버플로워 센서작동",
    onTime: "2013/05/12 3시 08분",
    offTime: "2021/08/221 9시 21분",
    count: 543,
  },
  {
    name: "저장탱크 수위",
    onTime: "2020/05/15 3시 08분",
    offTime: "2012/08/21 9시 21분",
    count: 232,
  },
  {
    name: "START 수위설정",
    onTime: "2020/07/12 3시 08분",
    offTime: "2018/08/21 9시 21분",
    count: 564,
  },
  {
    name: "END 수위설정",
    onTime: "2020/02/12 3시 08분",
    offTime: "2021/09/21 9시 21분",
    count: 342,
  },
  {
    name: "비상위험 수위설정",
    onTime: "2020/07/12 3시 08분",
    offTime: "2021/11/21 9시 21분",
    count: 1235,
  },
  {
    name: "비상비상 수위설정",
    onTime: "2020/09/12 3시 08분",
    offTime: "2021/12/21 9시 21분",
    count: 3466,
  },
  {
    name: "비상 END 수위설정",
    onTime: "2020/12/12 3시 08분",
    offTime: "2021/07/21 9시 21분",
    count: 23,
  },
  {
    name: "오버플로워 가동시간 설정",
    onTime: "2016/05/12 3시 08분",
    offTime: "2021/08/21 9시 21분",
    count: 27,
  },
  {
    name: "A고액분리기 Hz설정(고속)",
    onTime: "2017/05/12 3시 08분",
    offTime: "2021/08/21 9시 21분",
    count: 342,
  },
  {
    name: "A고액분리기 Hz설정(저속)",
    onTime: "2020/05/12 3시 08분",
    offTime: "2021/08/21 9시 21분",
    count: 454,
  },
  {
    name: "B고액분리기 Hz설정(고속)",
    onTime: "2028/05/12 3시 08분",
    offTime: "2021/08/21 9시 21분",
    count: 234,
  },
  {
    name: "B고액분리기 Hz설정(저속)",
    onTime: "2020/05/12 3시 08분",
    offTime: "2021/08/21 9시 21분",
    count: 342,
  },
  {
    name: "A고액분리기 Hz설정(고속세척)",
    onTime: "2020/05/12 3시 08분",
    offTime: "2021/08/21 9시 21분",
    count: 645,
  },
  {
    name: "A고액분리기 Hz설정(저속세척)",
    onTime: "2020/05/12 3시 08분",
    offTime: "2021/08/21 9시 21분",
    count: 345,
  },
  {
    name: "B고액분리기 Hz설정(고속세척)",
    onTime: "2020/05/12 3시 08분",
    offTime: "2021/08/21 9시 21분",
    count: 64,
  },
  {
    name: "B고액분리기 Hz설정(저속세척)",
    onTime: "2020/05/12 3시 08분",
    offTime: "2021/08/21 9시 21분",
    count: 364,
  },
];

// let randomNum = Math.random() * 10;

const notifiRecord = [...Array(19)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: notificationRecord[index].name,
  number: index + 1,
  count: notificationRecord[index].count,
  AccumulatedTime: faker.date.month(),
  onTime: notificationRecord[index].onTime,
  offTime: notificationRecord[index].offTime,
}));

export default notifiRecord;
