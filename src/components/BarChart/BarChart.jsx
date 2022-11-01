import React from "react";
import "./BarChart.css";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function BarChartx({ data }) {
  const formatDay = (item) => new Date(item).getDate();
  return (
    <div>
      <h2 className="barchart-title">Activité quotidienne</h2>
      <ul className="barchart-legend">
        <li>Poids (kg)</li>
        <li>Calories brûlées (kcal)</li>
      </ul>
      <ResponsiveContainer width={835} height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis
            dataKey="day"
            tickMargin={16}
            tickSize={0}
            tickFormatter={formatDay}
            // minTickGap={30}
          />
          <YAxis
            dataKey="kilogram"
            orientation="right"
            tickMargin={40}
            tickSize={0}
            axisLine={false}
            domain={["dataMin-2", "dataMax+1"]}
            // interval={"preserveEnd"}
            tickCount={3}
          />
          <YAxis
            dataKey="calories"
            yAxisId="calories"
            hide
            orientation="right"
            domain={["dataMin-100", "dataMax+0"]}
          />
          <Tooltip className="tooltip" />
          <Bar
            dataKey="kilogram"
            fill="#282d30"
            radius={[5, 5, 0, 0]}
            barSize={10}
          />
          {/* Bar de separation transparent */}
          <Bar dataKey="calories" fill="transparent" barSize={3} />
          {/* ---- */}
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#e60000"
            radius={[5, 5, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
