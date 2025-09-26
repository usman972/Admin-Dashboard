import { Box } from "@mui/material";
import Header from "../../components/Header";
import CustomPieChart from "../../components/CustomPieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <CustomPieChart />
      </Box>
    </Box>
  );
};

export default Pie;