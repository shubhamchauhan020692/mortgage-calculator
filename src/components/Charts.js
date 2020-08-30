import React, { useState } from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  Legend,
} from "recharts";

export const Charts = (props) => {
  return (
    <>
      <AreaChart
        width={500}
        height={250}
        data={props.graphData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="principal"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>

      <BarChart width={300} height={250} data={props.barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="totalCost" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Principal" fill="#8884d8" />
        <Bar dataKey="Interest" fill="#82ca9d" />
      </BarChart>
    </>
  );
};
