import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import CustomBarChart from "../../components/CustomBarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <CustomBarChart/>
      </Box>
     
    </Box>
  );
};

export default Bar;