import React, { Component } from "react";

class ActivityTable extends Component {
  render() {
    const activities = this.props.activities;
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
          {activities.map((activity) => (
            <tr>
              <td>{activity.title}</td>
              <td>{activity.Category.categoryName}</td>
              <td>{activity.sDate}</td>
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
                <span
                  id="deletebtn"
                  class="fa fa-trash-o"
                  title="Delete"
                ></span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default ActivityTable;
