import React, { Component } from "react";
import AddBranch from "./AddBranch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BranchDashboard extends Component {
  render() {
    return (
      <div class="container">
        <h4>Branch</h4>
        <br />
        <AddBranch />
        <hr size="2" />
        <br />
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Branch Name</th>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tr>
              <td>Computer Engineering</td>
              <td>
                <FontAwesomeIcon
                  icon="pencil-alt"
                  id="editbtn"
                  title="Edit"
                ></FontAwesomeIcon>
              </td>
              <td>
                <FontAwesomeIcon icon="trash" id="deletebtn" title="Delete" />
              </td>
            </tr>

            <tr>
              <td>Mechanical Engineering</td>

              <td>
                <FontAwesomeIcon icon="pencil-alt" />
              </td>
              <td>
                <FontAwesomeIcon icon="trash" id="deletebtn" />
              </td>
            </tr>
            <tr>
              <td>Electrical Engineering</td>
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

export default BranchDashboard;
