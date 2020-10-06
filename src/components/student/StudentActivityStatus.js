import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEnrollActivitiesStatus } from "../../actions/studentActivityAction";

class StudentActivityStatus extends Component {
  componentDidMount() {
    this.props.getEnrollActivitiesStatus(2);
  }

  render() {
    const { enrollStatus } = this.props.student;
    console.log(enrollStatus);
    return (
      <React.Fragment>
        <SideNav />
        <div id="main" className="openmain">
          <TopNav />
          <div className="maindivs" id="pageHeading">
            {" "}
            Pending/Rejected Activties:{" "}
          </div>

          <div class="maindivs">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Activity Name</th>
                    <th>Status</th>
                    <th>Category Name</th>
                    <th>Start Date</th>
                    <th>Setting</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollStatus.map((enroll) => (
                    <tr>
                      <td>{enroll.id}</td>
                      <td>{enroll.title}</td>
                      <td>
                        <button class="btn btn-primary">
                          {enroll.status == null ? "pending" : "waiting"}
                        </button>
                      </td>
                      <td>CSI</td>
                      <td>{enroll.sDate}</td>
                      <td>
                        <FontAwesomeIcon icon="trash" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

StudentActivityStatus.propTypes = {
  getEnrollActivitiesStatus: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps, { getEnrollActivitiesStatus })(
  StudentActivityStatus
);
