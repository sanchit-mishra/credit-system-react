import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class UpdateBranch extends Component {
  constructor() {
    super();

    this.state = {
      branch: "",
    };
  }

  render() {
    return (
      <div class="overlay" id="overlay">
        <div class="overlay-content">
          <div class="crossbtn" id="crossbtn" onclick="turnoffoverlay()">
            <span class="fa fa-times"></span>
          </div>

          <h4>Edit Branch</h4>
          <br />

          <div class="row">
            <div class="col-md-12">
              <label for="EditbranchName">Branch Name:</label>
              <input
                type="text"
                type="text"
                name="EditbranchName"
                id="EditbranchName"
                class="form-control"
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-default" id="editBranch">
                Update Details <span class="fa fa-check-circle"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBranch;
