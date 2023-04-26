import React from 'react';
//importing the library for bar chart
import { Pie } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';
function PieChart({ chartData }) {
  return <Pie data={chartData} />;
}

export default PieChart;
