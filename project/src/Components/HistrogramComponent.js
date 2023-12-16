// HistogramComponent.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const HistogramComponent = () => {
  const data = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
    datasets: [
      {
        label: 'Histogram Data',
        data: [15, 25, 10, 30, 20],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default HistogramComponent;
