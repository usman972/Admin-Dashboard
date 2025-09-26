import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import CustomLineChart from "../../components/CustomLineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <CustomLineChart />
    </Box>
  );
};

export default Line;
