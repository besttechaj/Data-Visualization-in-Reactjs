import React from 'react';

//importing the library for bar chart
import { Line } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';
function LineChart({ chartData }) {
  return <Line data={chartData} />;
}

export default LineChart;
