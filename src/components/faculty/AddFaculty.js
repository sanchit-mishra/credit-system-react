import React, { Component } from "react";

class AddFaculty extends Component {
  render() {
    return (
      <div className="container">
        <h4>Enter Faculty Details</h4>

        <hr size="2" />

        {/* <!-----------------FORMS STARTS HERE-------------------------> */}

        <form method="" action="">
          <div className="row">
            <div className="col-md-6">
              <label for="facultyName">Faculty Name:</label>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="facultyName"
                  id="facultyName"
                  placeholder="Enter Faculty Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="selectBranch">Branch:</label>
              <select id="selectBranch">
                <option value="">Select Branch</option>
                {/* <!--this list will come from backend from branch table. Given data is for demo--> */}
                <option value="">Mechanical Engineering</option>
                <option value="">Computer Engineering</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label for="emailID">Email ID:</label>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="emailID"
                  id="emailID"
                  placeholder="Enter Email ID"
                />
              </div>
            </div>

            <div className="col-md-6">
              <label for="Password">Password:</label>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="Password"
                  id="Password"
                  placeholder="Enter Password"
                />
              </div>
            </div>
          </div>
          <br />

          {/* <!--BUTTON TO ADD --> */}
          <button className="btn btn-default" id="addBranch">
            ADD
          </button>
        </form>
      </div>
    );
  }
}

export default AddFaculty;
