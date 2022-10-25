import React from "react";
import "./PieChart.css";
import { USER_MAIN_DATA } from "../../data/mocked-data";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

export default function PieChartx() {
  const data = USER_MAIN_DATA[1].score;
  const CustomLegend = ({ payload }) => (
    <div className="chart-legend">
      <div className="chart-legend-1">{payload[0].payload.value * 100}%</div>
      <div className="chart-legend-2">de votre objectif</div>
    </div>
  );
  console.log(data);
  return (
    <div>
      <h2 className="pie-title">Score</h2>
      <ResponsiveContainer width={258} height={253}>
        <PieChart margin={{ top: 35, right: 35, bottom: 35, left: 35 }}>
          <Pie
            dataKey="value"
            data={[
              { name: "score", value: data },
              { name: "total", value: 1 - data },
            ]}
            cx="50%"
            cy="50%"
            innerRadius={"90%"}
            outerRadius="100%"
            startAngle={90}
            endAngle={450}
          >
            <Cell fill="#E60000" stroke="#E60000" />
            <Cell fill="transparent" stroke="transparent" />
          </Pie>
          <Pie
            cx={"50%"}
            cy={"50%"}
            outerRadius={"90%"}
            fill="#FFF"
            data={[{ name: "shadow-circle", value: 100 }]}
            dataKey="value"
          />
          <Legend
            verticalAlign="middle"
            align="center"
            content={CustomLegend}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
