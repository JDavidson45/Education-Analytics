import React from 'react';
import { render } from '@testing-library/react';
import { Doughnut } from 'react-chartjs-2';
import '../App.css';

class ProgramChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: Object.keys(
          this.props.data[0].latest.academics.program_percentage
        ),
        datasets: [
          {
            data: Object.values(
              this.props.data[0].latest.academics.program_percentage
            ),
            backgroundColor: [
              'rgba(234, 31, 38, 1)',
              'rgba(246, 137, 250, 1)',
              'rgba(95, 31, 234, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(129,42,98, 1)',
              'rgba(225,169,232, 1)',
              'rgba(17,200,50, 1)',
              'rgba(237,216,185, 1)',
              'rgba(167,181,212, 1)',
              'rgba(165,145,32, 1)',
              'rgba(80,243,155, 1)',
              'rgba(245,198,79, 1)',
              'rgba(61,171,168, 1)',
              'rgba(200,103,22, 1)',
              'rgba(219,153,179, 1)',
              'rgba(161,77,156, 1)',
              'rgba(255,249,4, 1)',
              'rgba(61,89,42, 1)',
              'rgba(92,89,0, 1)',
              'rgba(78,196,136, 1)',
              'rgba(255,153,138, 1)',
              'rgba(77,138,196, 1)',
              'rgba(99,63,43, 1)',
              'rgba(83,72,211, 1)',
              'rgba(16,75,8, 1)',
              'rgba(174,216,123, 1)'
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id='programChart'>
        <Doughnut id='program'
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Program Percentages',
            },
          }}
        />
      </div>
    );
  }
}

export default ProgramChart;
