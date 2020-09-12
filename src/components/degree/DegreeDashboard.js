import React, { Component } from "react";
import AddDegree from "./AddDegree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DegreeDashboard extends Component {
  render() {
    return (
      <div class="container">
        <h4>Degree</h4>
        <br />
        <AddDegree />
        <hr size="2" />
        <br />
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Degree Name</th>
                <th>Year</th>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tr>
              <td>BTECH</td>
              <td>4</td>
              <td>
                <FontAwesomeIcon icon="pencil-alt" />
              </td>
              <td>
                <FontAwesomeIcon icon="trash" id="deletebtn" />
              </td>
            </tr>
            <tr>
              <td>BE</td>
              <td>4</td>
              <td>
                <FontAwesomeIcon icon="pencil-alt" />
              </td>
              <td>
                <FontAwesomeIcon icon="trash" id="deletebtn" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default DegreeDashboard;
