import React from "react";
import { USER_AVERAGE_SESSIONS } from "../../data/mocked-data";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

export default function LineChartx() {
  return (
    <div>
      LineChart
      <h3>Durée moyenne des sessions</h3>
      <LineChart
        width={258}
        height={253}
        data={USER_AVERAGE_SESSIONS[1].sessions}
        margin={{ top: 5, bottom: 50 }}
      >
        <XAxis dataKey="day" />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
