import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { USER_ACTIVITY } from "../../data/mocked-data";

export default function BarChartx() {
  return (
    <div>
      BarChart
      <BarChart width={835} height={320} data={USER_ACTIVITY[1].sessions}>
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#8884d8" />
        <Bar dataKey="calories" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
