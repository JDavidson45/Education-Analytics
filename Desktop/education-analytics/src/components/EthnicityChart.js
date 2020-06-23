import React from 'react';
import { render } from '@testing-library/react';
import {Bar, Doughnut } from 'react-chartjs-2'

class EthnicityChart extends React.Component {
  constructor() {
    super()
// this.state = {
//   chartData: {
//     labels: ['asian', 'black', 'hispanic', 'white'],
//     datasets: [{
//      data: [this.props.data.latest.student.demographics.share_asian]
//     }]
//   }
// }
  }

  render() {
  return (
    <div id='ethnicityChart'>
      hello
      {/* <Bar
  data={data}
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}
/> */}
    </div>
  );
}
}

export default EthnicityChart;
