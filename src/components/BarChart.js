import React from 'react';

//importing the library for bar chart
import { Bar } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';
function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

export default BarChart;
