import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DegreeeTable extends Component {
  render() {
    const { degrees } = this.props;
    console.table(degrees);
    return (
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
          <tbody>
            {degrees.map((degree) => (
              <tr>
                <td>{degree.degree}</td>
                <td>{degree.year}</td>
                <td>
                  <FontAwesomeIcon icon="pencil-alt" />
                </td>
                <td>
                  <FontAwesomeIcon icon="trash" id="deletebtn" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DegreeeTable;
