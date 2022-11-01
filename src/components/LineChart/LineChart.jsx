import React from "react";
import "./LineChart.css";
import { USER_AVERAGE_SESSIONS } from "../../data/mocked-data";
import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
  Line,
} from "recharts";

export default function LineChartx({ data }) {
  const dayWeek = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
  const formatDay = (item) => dayWeek[item];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="intro">{`${payload[0].value} min`}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h2 className="linechart-title">
        Durée moyenne des <br></br> sessions
      </h2>
      <ResponsiveContainer width={258} height={170}>
        <LineChart
          data={data}
          // margin={{ top: 5, bottom: 50 }}
        >
          <XAxis
            dataKey="day"
            tickFormatter={formatDay}
            axisLine={false}
            tickSize={0}
            tickMargin={0}
            padding={{ left: 10, right: 10 }}
            tick={{ fill: "#FFF" }}
          />
          <YAxis
            hide
            type="number"
            domain={[(dataMin) => 0, (dataMax) => dataMax + 10]}
          />
          <Tooltip content={CustomTooltip} />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            activeDot={{ r: 4 }}
            dot={{ r: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
