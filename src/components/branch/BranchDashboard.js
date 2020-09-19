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

  UNSAFE_componentWillReceiveProps() {
    this.props.getBranches();
  }
  render() {
    const { branches } = this.props.branch;

    return (
      <div className="container">
        <h4>Branch</h4>
        <br />
        <AddBranch />
        <br />

        <BranchTable branches={branches} />
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
