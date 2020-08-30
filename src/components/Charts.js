import React, { useState } from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const Charts = () => {
  const data = [
    {
      name: "0",
      uv: 100000,
    },
    {
      name: "100",
      uv: 100000 - 319.73 * 100,
    },
    {
      name: "200",
      uv: 100000 - 319.73 * 200,
    },
    {
      name: "300",
      uv: 100000 - 319.73 * 300,
    },
    {
      name: "400",
      uv: 100000 - 319.73 * 400,
    },
    {
      name: "500",
      uv: 100000 - 319.73 * 500,
    },
    {
      name: "600",
      uv: 100000 - 319.73 * 600,
    },
  ];
  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};
