import React from "react";
import propTypes from "prop-types";
import "./LineChart.css";
import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
  Line,
} from "recharts";

/**
 * Show user time session with line chart
 * @param { Object } params
 * @param { Array } params.data
 * @returns {JSX}
 */
export default function LineChartx({ data }) {
  // prop-types
  LineChartx.propTypes = {
    data: propTypes.array.isRequired,
  };

  const dayWeek = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
  const formatDay = (item) => dayWeek[item];

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
        <div className="custom-tooltip">
          <div className="intro">{`${payload[0].value} min`}</div>
        </div>
      );
    }
    return null;
  };
  //prop-types
  CustomTooltip.propTypes = {
    active: propTypes.bool,
    payload: propTypes.array,
  };

  return (
    <div className="graphic line-chart">
      <h2 className="linechart-title">
        Durée moyenne des <br></br> sessions
      </h2>
      <ResponsiveContainer width="100%" height="60%">
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
