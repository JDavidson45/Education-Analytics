import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      data: []
    }
  }
  componentDidMount(){
    fetch('https://api.data.gov/ed/collegescorecard/v1/schools?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=r87Xy5qD9owyjHYgYvmBzhFLWbvtwfzL3h9936rb')
  .then(res => res.json())
  .then(data => this.setState({
    loaded: true,
    data: data.results
  }))
  }
  render() {
    console.log(this.state.data[0])
    //const school = this.state.data[0].school || {}
    if(this.state.loaded === false) {
      return <h1>Loading...</h1>
    }
  return (
    <div className="App">
      <h1>{this.state.data[0].school.name}</h1>
      <h2>Alias: {!this.state.data[0].school.alias ? 'N/A' : ''}</h2>
      <p>{this.state.data[0].school.school_url}</p>
      <p>{this.state.data[0].school.city}, {this.state.data[0].school.state}, {this.state.data[0].school.zip}</p>
      <p>Student Size: {this.state.data[0].latest.student.size}</p>
      {/* {this.state.data} */}
    </div>
  );
}
}

export default App;
