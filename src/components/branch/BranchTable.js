import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteBranch } from "../../actions/branchAction";

class BranchTable extends Component {
  onDeleteClick(id) {
    this.props.deleteBranch(id);
  }

  render() {
    const { branch } = this.props;
    return (
      <div class="table-responsive">
        <table class="table table-striped">
          <tr>
            <td>{branch.branchName}</td>
            <td>
              <FontAwesomeIcon
                icon="pencil-alt"
                id="editbtn"
                title="Edit"
              ></FontAwesomeIcon>
            </td>
            <td>
              <FontAwesomeIcon
                icon="trash"
                id="deletebtn"
                title="Delete"
                onClick={this.onDeleteClick.bind(this, branch.id)}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

BranchTable.propTypes = {
  deleteBranch: PropTypes.func.isRequired,
};

export default connect(null, { deleteBranch })(BranchTable);
