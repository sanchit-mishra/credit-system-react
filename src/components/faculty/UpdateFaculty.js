import React, { Component } from "react";

class UpdateFaculty extends Component {
  render() {
    return (
      <div class="container">
        <h4> Edit Faculty Details</h4>
        <hr size="2" />

        <form method="" action="">
          <label>Faculty Name:</label>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              placeholder="Enter Faculty Name"
            />
            <br />
            <label>Branch:</label>
            <select id="selectBranch">
              <option value="">Select Branch</option>
              <option value="">Mechanical Engineering</option>
              <option value="">Computer Engineering</option>
            </select>

            <br />
            <label>Email ID:</label>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                placeholder="Enter Email ID"
              />
              <br />
              <label>Password:</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  placeholder="Enter Password"
                />
                <br />
                <button class="btn btn-default" id="addBranch">
                  Add Faculty{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateFaculty;
