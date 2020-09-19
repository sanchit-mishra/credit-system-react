import React, { Component } from "react";
import AddDegree from "./AddDegree";
import DegreeeTable from "./DegreeTable";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDegrees } from "../../actions/degreeAction";

class DegreeDashboard extends Component {
  componentDidMount() {
    this.props.getDegrees();
  }

  UNSAFE_componentWillReceiveProps() {
    this.props.getDegrees();
  }

  render() {
    const { degrees } = this.props.degree;
    return (
      <div class="container">
        <h4>Degree</h4>
        <br />
        <AddDegree />
        <hr size="2" />
        <br />

        <DegreeeTable degrees={degrees} />
      </div>
    );
  }
}

DegreeDashboard.propTypes = {
  getDegrees: PropTypes.func.isRequired,
  degree: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  degree: state.degree,
});

export default connect(mapStateToProps, { getDegrees })(DegreeDashboard);
