import React, { Component } from "react";
import { getBranches } from "../../actions/branchAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AddBranch from "./AddBranch";
import BranchTable from "./BranchTable";

class BranchDashboard extends Component {
  componentDidMount() {
    this.props.getBranches();
  }
  render() {
    const { branches } = this.props.branch;
    const BranchTableDisplay = () => {
      return (
        <div>
          {branches.map((branch) => (
            <BranchTable key={branch.id} branch={branch} />
          ))}
        </div>
      );
    };

    return (
      <div className="container">
        <h4>Branch</h4>
        <br />
        <AddBranch />
        <br />
        <thead>
          <tr>
            <th>Branch Name</th>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <BranchTableDisplay />
      </div>
    );
  }
}

BranchDashboard.propTypes = {
  branch: PropTypes.object.isRequired,
  getBranches: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  branch: state.branch,
});

export default connect(mapStateToProps, { getBranches })(BranchDashboard);
