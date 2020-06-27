import React from 'react';
import { render } from '@testing-library/react';
import {Bar, Doughnut } from 'react-chartjs-2'
import '../App.css';

class EthnicityChart extends React.Component {
  constructor(props) {
    super(props)
this.state = {
  chartData: {
    labels: ['asian', 'black', 'hispanic', 'white'],
    datasets: [{
     data:
       this.props.demograph,
       backgroundColor: [
        'rgba(234, 31, 38, 1)',
        'rgba(246, 137, 250, 1)',
        'rgba(95, 234, 31, 1)',
        'rgba(95, 31, 234, 1)'
    ],
    }]
  }
 }
}

  render() {
    console.log(this.props, this.props.data[0].latest.student.demographics.share_white.home_ZIP)
  return (
    <div id='ethnicityChart'>
      <Doughnut id='chart'
  data={this.state.chartData}
  options={{title: {
    display: true,
    text: 'School Demographics'
  }}}
/>
    </div>
  );
}
}

export default EthnicityChart;
