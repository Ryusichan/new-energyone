import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const dateCountTo = () => {
  const now = new Date();
  const todayYear = now.getFullYear();
  const todayMonth = now.getMonth();
  const todayDate = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return (
    todayYear +
    "/" +
    (todayMonth + 1) +
    "/" +
    todayDate +
    " " +
    hours +
    "시" +
    minutes +
    "분"
  );
};

const DateCount = () => {
  const [dateCount, setDateCount] = useState(dateCountTo);

  useEffect(() => {
    setInterval(() => {
      setDateCount(dateCountTo());
    }, 1000);
  }, []);
  return (
    <Typography variant="body2" gutterBottom>
      {dateCount}
    </Typography>
  );
};

export default DateCount;
