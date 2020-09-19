import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StudentTable from "./StudentTable";
import PropTypes from "prop-types";
import { getStudents } from "../../actions/studentAction";
import { connect } from "react-redux";

class StudentDashboard extends Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    const { students } = this.props.student;
    return (
      <div class="container">
        <h4>Student</h4>
        <br />

        <Link to="/addStudent">
          <button class="btn btn-default" id="addStudent">
            Add Student <FontAwesomeIcon icon="plus" />
          </button>
        </Link>

        <hr size="2" />

        <StudentTable students={students} />
      </div>
    );
  }
}

StudentDashboard.propTypes = {
  getStudents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps, { getStudents })(StudentDashboard);
