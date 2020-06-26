import React from 'react';
import { render } from '@testing-library/react';
import {Bar } from 'react-chartjs-2'
import '../App.css';

class TuitionChart extends React.Component {
  constructor(props) {
    super(props)
this.state = {
  chartData: {
    labels: ['In State','Out Of State'],
    datasets: [{
      label: 'Tuition',
     data:
       [this.props.data[0].latest.cost.tuition.in_state, this.props.data[0].latest.cost.tuition.out_of_state],
       backgroundColor: [
        'rgba(234, 31, 38, 1)',
        'rgba(0,0,255, 1)',
    ],
    }]
  }
 }
}

  render() {
  return (
    <div id='ethnicityChart'>
      <Bar
  data={this.state.chartData}
  options={{title: {
    display: true
  }}}
/>
    </div>
  );
}
}

export default TuitionChart;
