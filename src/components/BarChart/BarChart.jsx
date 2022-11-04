import React from "react";
import propTypes from "prop-types";
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

/**
 * Show user Activity with bar chart
 * @param { Object } params
 * @param { Array } params.data
 * @returns {JSX}
 */
export default function BarChartx({ data }) {
  // propTypes
  BarChartx.propTypes = {
    data: propTypes.array.isRequired,
  };

  /**
   * Show custom tooltip
   * @param { Object } params
   * @param { Boolean } params.active
   * @param { Array } params.payload
   * @returns
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip custom-bar">
          <div className="data-kg">{`${payload[0].value}Kg`}</div>
          <div className="data-cal">{`${payload[1].value}kCal`}</div>
        </div>
      );
    }
  };

  const formatDay = (item) => new Date(item).getDate();
  return (
    <div className="barre-graphic">
      <h2 className="barchart-title">Activité quotidienne</h2>
      <ul className="barchart-legend">
        <li>Poids (kg)</li>
        <li>Calories brûlées (kcal)</li>
      </ul>
      <ResponsiveContainer width="100%" height="60%">
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
            domain={["dataMin-100", "dataMax+10"]}
          />
          <Tooltip
            content={<CustomTooltip />}
            // viewBox={{ x: 50, y: 150, width: 200, height: 400 }}
            // coordinate={{ x: 100, y: 340 }}
          />
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
