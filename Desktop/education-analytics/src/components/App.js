import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { render } from '@testing-library/react';
import EthnicityChart from './EthnicityChart';
import ProgramChart from './ProgramChart';
import Pdf from 'react-to-pdf';
import ReactToPrint from 'react-to-print';
import TuitionChart from './TuitionChart';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      data: [],
      demograph: [],
      ref: React.createRef(),
    };
  }
  componentDidMount() {
    fetch(
      'https://api.data.gov/ed/collegescorecard/v1/schools?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=r87Xy5qD9owyjHYgYvmBzhFLWbvtwfzL3h9936rb'
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          loaded: true,
          data: data.results,
          // demograph:[this.state.data[0].latest.student.demographics.share_asian.home_ZIP, this.state.data[0].latest.student.demographics.share_black.home_ZIP, this.state.data[0].latest.student.demographics.share_hispanic.home_ZIP, this.state.data[0].latest.student.demographics.share_white.home_ZIP]
        })
      );
  }
  render() {
    console.log(this.state.data[0]);
    //const school = this.state.data[0].school || {}
    if (this.state.loaded === false) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="App">
        <Navbar expand="sm" variant="dark" bg="dark">
          <div id="buttons">
            <Navbar.Brand className="ml-auto">
              <Nav>
                <ReactToPrint
                  trigger={() => {
                    return (
                      <Nav.Link href='#' size="sm" variant="light">
                        Print
                      </Nav.Link>
                    );
                  }}
                  content={() => this.componentRef}
                />
                <Pdf
                  targetRef={this.state.ref}
                  filename="Wisconsin-Madison-Stats.pdf"
                >
                  {({ toPdf }) => (
                    <Nav.Link size="sm" variant="light" onClick={toPdf}>
                      Download Pdf
                    </Nav.Link>
                  )}
                </Pdf>
              </Nav>
            </Navbar.Brand>
          </div>
        </Navbar>
        <div ref={this.state.ref}>
          <div ref={el => (this.componentRef = el)}>
            <div id='intro'>
          <img id='pic' src='https://images.squarespace-cdn.com/content/v1/5a71eff78dd0418fa3dcb980/1517966666021-BJFCB7Y9VVQEN4KLPIHT/ke17ZwdGBToddI8pDm48kO2pS9cMHbO4RvHPc8Skf1tZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7SSwGn0TPzISNt3iSJufpcvR7xFZ2oYA-YTitnkXPCuTgiUfhLEJ_Uxi_cK3qclb8w/press-page-uwmadisonlogo-074ba7ec6da2e973d30ab6851f14f96002ec5a744e9712a837484b038c28c97c.png'/>
             <h2 id="name">{this.state.data[0].school.name}</h2>
            <p>Alias: {!this.state.data[0].school.alias ? 'N/A' : ''}</p>
            <p>Student Size: {this.state.data[0].latest.student.size}</p>
            </div>
            <EthnicityChart
              demograph={[
                this.state.data[0].latest.student.demographics.share_asian
                  .home_ZIP,
                this.state.data[0].latest.student.demographics.share_black
                  .home_ZIP,
                this.state.data[0].latest.student.demographics.share_hispanic
                  .home_ZIP,
                this.state.data[0].latest.student.demographics.share_white
                  .home_ZIP,
              ]}
              data={this.state.data}
            />
            <ProgramChart data={this.state.data} />
            <TuitionChart data={this.state.data} />
            <Navbar expand="sm" variant="dark" bg="dark">
            <Navbar.Brand>{this.state.data[0].school.school_url}</Navbar.Brand>
            <Navbar.Brand>
              {this.state.data[0].school.city},{' '}
              {this.state.data[0].school.state}, {this.state.data[0].school.zip}
            </Navbar.Brand>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
