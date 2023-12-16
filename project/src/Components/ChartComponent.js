// ChartComponent.js
import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';

const ChartComponent = () => {
  // Data for the line chart
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [50, 75, 120, 100, 150],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Data for the histogram
  // const histogramData = {
  //   labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
  //   datasets: [
  //     {
  //       label: 'Frequency',
  //       data: [10, 20, 15, 25, 30],
  //       backgroundColor: 'rgba(255,99,132,0.5)',
  //       borderColor: 'rgba(255,99,132,1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // Data for the pie chart
  const pieChartData = {
    labels: ['Category A', 'Category B', 'Category C'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['rgba(255,99,132,0.5)', 'rgba(54,162,235,0.5)', 'rgba(255,206,86,0.5)'],
        hoverBackgroundColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)'],
      },
    ],
  };

  return (
    <div>
      {/* <h2>Line Chart</h2> */}
      {/* <Line data={lineChartData} /> */}

      {/* <h2>Histogram</h2> */}
      {/* <Bar
        data={histogramData}
        options={{
          scales: {
            x: {
              type: 'category',
              labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
            },
          },
        }}
      /> */}

      {/* <h2>Pie Chart</h2> */}
      <Pie data={pieChartData} />
    </div>
  );
};

export default ChartComponent;
