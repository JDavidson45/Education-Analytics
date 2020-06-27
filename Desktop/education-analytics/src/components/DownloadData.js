import React from 'react';
import { render } from '@testing-library/react';
import '../App.css';
import ReactToExcel from "react-html-table-to-excel";
class DownloadData extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      show: false
    }
  }
  render() {
    return (
      <div>
       <div id='holder'>
        <table id='table'>
          <thead>
            <tr>
              <th>Program</th>
              <th>percentage</th>
              <th></th>
              <th></th>
              <th>demographics</th>
              <th>percentage</th>
              <th></th>
              <th></th>
              <th>Tuition</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(
              this.props.data[0].latest.academics.program_percentage
            ).map((program, i) => {
              return program.includes('_') ? (
                <tr>
                  <td key={i}>{program.replace(/_/g, ' ')}</td>
                  <td>
                    {Object.values(
                      this.props.data[0].latest.academics.program_percentage
                    )}
                  </td>
                </tr>
              ) : (
                <tr>
                  <td key={i}>{program}</td>
                  <td>
                    {Object.values(
                      this.props.data[0].latest.academics.program_percentage
                    )}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Asian</td>
              <td>
                {
                  this.props.data[0].latest.student.demographics.share_asian
                    .home_ZIP
                }
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Black</td>
              <td>
                {
                  this.props.data[0].latest.student.demographics.share_black
                    .home_ZIP
                }
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Hispanic</td>
              <td>
                {
                  this.props.data[0].latest.student.demographics.share_hispanic
                    .home_ZIP
                }
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>White</td>
              <td>
                {
                  this.props.data[0].latest.student.demographics.share_white
                    .home_ZIP
                }
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Out Of State</td>
              <td>{this.props.data[0].latest.cost.tuition.out_of_state}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>In State</td>
              <td>{this.props.data[0].latest.cost.tuition.in_state}</td>
            </tr>
          </tbody>
        </table>
        </div>
        <ReactToExcel id='data' table='table' filename='Wisconsin-Stats' sheet='Wisconsin-Stat-sheet' buttonText='Download Data'/>
      </div>

    );
  }
}

export default DownloadData;

