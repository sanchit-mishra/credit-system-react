import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacultyTable from "./FacultyTable";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFaculties } from "../../actions/facultyAction";
import Header from "../layout/header";

class FacultyDashboard extends Component {
  componentDidMount() {
    this.props.getFaculties();
  }

  render() {
    const { faculties } = this.props.faculty;

    // const FacultyTableDisplay = () => {
    //   return (
    //     <div>
    //       {faculties.map((faculty) => (
    //         <FacultyTable key={faculty.id} faculty={faculty} />
    //       ))}
    //     </div>
    //   );
    // };

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h4>
            <FontAwesomeIcon icon="chalkboard-teacher" /> <span>Faculty</span>
          </h4>

          {/* <!--BUTTON TO ADD --> */}
          <Link to="/addFaculty">
            <button className="btn btn-default" id="addBranch">
              Add Faculty
              <FontAwesomeIcon icon="plus" />
            </button>
          </Link>

          <hr size="2" />

          <div className="tableControl">
            <div className="row">
              <div className="col-md-9">
                <select>
                  <option value="">Sort By Branch</option>
                  {/* <!--this list will come from backend from branch table. Given data is for demo--> */}
                  <option value="">Mechanical Engineering</option>
                  <option value="">Computer Engineering</option>
                </select>
              </div>
              <input type="text" placeholder="Search" id="searchBtn" required />
            </div>
          </div>
          <br />

          <FacultyTable faculties={faculties} />
        </div>
      </React.Fragment>
    );
  }
}

FacultyDashboard.propTypes = {
  faculty: PropTypes.object.isRequired,
  getFaculties: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  faculty: state.faculty,
});

export default connect(mapStateToProps, { getFaculties })(FacultyDashboard);
