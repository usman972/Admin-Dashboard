import React, { useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { mockPieData } from "../data/mockData";

const CustomPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div style={{ width: "100%", height: 600 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={mockPieData}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            outerRadius={220}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {mockPieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                opacity={activeIndex === null ? 1 : activeIndex === index ? 1 : 0.3} // blur effect
                style={{
                  transition: "opacity 0.3s ease", // smooth animation
                }}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
