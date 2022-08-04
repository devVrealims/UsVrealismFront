import React from "react";
import { Chart } from "react-google-charts";
const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

const Donut = () => {
  const options = {
    title: "Daily Activities",
    pieHole: 0.6,
    is3D: true,
  };
  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="150px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Donut;
