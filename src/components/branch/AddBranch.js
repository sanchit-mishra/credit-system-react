import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddBranch() {
  return (
    <div class="row">
      <div class="col-md-9">
        <input
          type="text"
          name="branchName"
          id="branchName"
          class="form-control"
          placeholder="Enter Branch Name"
        />
      </div>
      <button class="btn btn-default" id="addBranch">
        Add Branch <FontAwesomeIcon icon="plus" />
      </button>
    </div>
  );
}
