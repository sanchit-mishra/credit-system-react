import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddDegree extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-4">
          <input
            type="text"
            name="degreeName"
            id="degreeName"
            class="form-control"
            placeholder="Enter Degree Name"
          />
        </div>
        <div class="col-md-4">
          <input
            type="text"
            name="noofyears"
            id="noofyears"
            class="form-control"
            placeholder="Enter No. of Years"
          />
        </div>
        <button class="btn btn-default" id="addDegree">
          Add Degree <FontAwesomeIcon icon="plus" />
        </button>
      </div>
    );
  }
}

export default AddDegree;
