import React, { Component } from "react";

class ActivityTable extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Category</th>
              <th>Start Date</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tr>
            <td>Paper Presentaion</td>
            <td>Multicon-W</td>
            <td>25-2-2020</td>
            <td>
              <a href="">View more</a>
            </td>
            <td>
              <span
                onclick="turnonoverlay()"
                id="editbtn"
                class="fa fa-pencil"
                title="Edit"
              ></span>
            </td>
            <td>
              <span id="deletebtn" class="fa fa-trash-o" title="Delete"></span>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ActivityTable;
