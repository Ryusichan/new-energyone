import { Form, FormikProvider, useFormik } from "formik";
// material
import {
  Box,
  Card,
  Checkbox,
  CardHeader,
  Typography,
  FormControlLabel,
  Stack,
} from "@mui/material";

// ----------------------------------------------------------------------

const TASKS = [
  "자동운전화면 점검하기",
  "PM 12시 수동운전화면-배기밸브 점검",
  "알림 요청 체크하기",
  "Noti 확인하기",
  "적산전력 기록화면 Full 삭제하기",
];

// ----------------------------------------------------------------------

interface Props {
  task: string;
  checked: boolean;
  formik: object;
}

function TaskItem({ task, checked, formik, ...other }: Props) {
  const { getFieldProps }: any = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox
            {...getFieldProps("checked")}
            value={task}
            checked={checked}
            {...other}
          />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: "text.disabled",
                textDecoration: "line-through",
              }),
            }}
          >
            {task}
          </Typography>
        }
      />
    </Stack>
  );
}

export default function AppTasks() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, handleSubmit } = formik;

  return (
    <Card>
      <CardHeader title="체크 리스트" />
      <Box sx={{ px: 3, py: 1 }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {TASKS.map((task) => (
              <TaskItem
                key={task}
                task={task}
                formik={formik}
                checked={values.checked.includes(task)}
              />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}
