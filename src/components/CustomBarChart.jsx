import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { mockBarData } from "../data/mockData";

const CustomBarChart = () => {
  // Function to download CSV
  const downloadCSV = () => {
    if (!mockBarData || mockBarData.length === 0) return;

    // Extract headers
    const headers = Object.keys(mockBarData[0]).join(",");

    // Extract rows
    const rows = mockBarData.map((row) =>
      Object.values(row)
        .map((value) => `"${value}"`) // wrap in quotes for safety
        .join(",")
    );

    // Combine into CSV string
    const csvContent = [headers, ...rows].join("\n");

    // Create a blob and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "barchart_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        width: "100%",
        height: 500,
        marginTop: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Chart */}
      <div style={{ width: "100%", height: "250px" }}>
        <ResponsiveContainer>
          <BarChart
            data={mockBarData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="hot dog" fill="#82ca9d" />
            <Bar dataKey="burger" fill="#8884d8" />
            <Bar dataKey="kebab" fill="#ffc658" />
            <Bar dataKey="donut" fill="#ff7f50" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadCSV}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Download CSV Report
      </button>
    </div>
  );
};

export default CustomBarChart;
