import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { mockLineData } from "../data/mockData";

const CustomLineChart = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart
          data={mockLineData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
