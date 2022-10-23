import React from "react";
import { USER_MAIN_DATA } from "../../data/mocked-data";
import { PieChart, Pie } from "recharts";

export default function PieChartx() {
  return (
    <div>
      PieChart
      <PieChart width={258} height={253}>
        <Pie
          data={USER_MAIN_DATA}
          dataKey={USER_MAIN_DATA[1].score}
          nameKey={USER_MAIN_DATA[1].id}
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={USER_MAIN_DATA[0].score}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
}
