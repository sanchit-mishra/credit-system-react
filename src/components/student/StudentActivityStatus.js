import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import SideNav from "./StudentSideNav";
import TopNav from "./StudentTopNav";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getEnrollActivitiesStatus,
  deleteEnrollActivity,
} from "../../actions/studentActivityAction";

class StudentActivityStatus extends Component {
  componentDidMount() {
    this.props.getEnrollActivitiesStatus(6);
  }

  onDeleteClick(id) {
    this.props.deleteEnrollActivity(id);
  }

  render() {
    const { enrollStatus } = this.props.student;
    console.log(enrollStatus);
    // const { Activities } = enrollStatus;
    // let activityList = Activities.map((activity) => )
    return (
      <React.Fragment>
        <SideNav />
        <div id="main" className="openmain">
          <TopNav />
          <div className="maindivs" id="pageHeading">
            {" "}
            Pending/Rejected Activties:{" "}
          </div>

          <div className="maindivs">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Activity Name</th>
                    <th>Status</th>
                    <th>Category Name</th>
                    <th>Start Date</th>
                    <th>Action</th>
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
                      <td></td>
                      <td>{enroll.sDate}</td>
                      <td>
                        <FontAwesomeIcon
                          icon="trash"
                          onClick={this.onDeleteClick.bind(this, enroll.id)}
                        />
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
  deleteEnrollActivity: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps, {
  getEnrollActivitiesStatus,
  deleteEnrollActivity,
})(StudentActivityStatus);
