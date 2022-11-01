import React from "react";
import "./RadarChart.css";
import { USER_PERFORMANCE } from "../../data/mocked-data";
import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

export default function RadarChartx({ data }) {
  console.log(data);
  const kind = data.kind;
  const datas = data.data;
  const kindTitle = {
    cardio: "Cardio",
    energy: "Energy",
    endurance: "Endurance",
    strength: "Strength",
    speed: "Speed",
    intensity: "Intensity",
  };
  const formatKind = (id) => kindTitle[kind[id]];
  return (
    <div>
      <ResponsiveContainer width={258} height={253}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="65%"
          startAngle={210}
          endAngle={570}
          data={datas}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={formatKind}
            tick={{ fill: "#FFF", fontFamily: "Roboto", fontSize: "12px" }}
          />

          <Radar
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
