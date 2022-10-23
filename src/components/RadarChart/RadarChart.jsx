import React from "react";
import { USER_PERFORMANCE } from "../../data/mocked-data";
import {
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  RadarChart,
} from "recharts";

export default function RadarChartx() {
  console.log(USER_PERFORMANCE[1]);
  return (
    <div>
      RadarChart
      <RadarChart
        outerRadius={90}
        width={258}
        height={253}
        data={USER_PERFORMANCE[1].kind}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Mike"
          dataKey={USER_PERFORMANCE[1].data.values}
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
}
