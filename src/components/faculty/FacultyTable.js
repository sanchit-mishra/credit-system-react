import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteFaculty } from "../../actions/facultyAction";

class FacultyTable extends Component {
  onDeleteClick = (id) => {
    this.props.deleteFaculty(id);
  };

  render() {
    const { faculties } = this.props;
    return (
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Faculty Name</th>
              <th>Branch</th>
              <th>EmailID</th>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {faculties.map((faculty) => (
              <tr>
                <td>{faculty.name}</td>
                <td>Computer Engineering</td>
                <td>{faculty.email}</td>
                <td>
                  <Link to={`/updateFaculty/${faculty.id}`}>
                    <span
                      id="editbtn"
                      className="fa fa-pencil"
                      title="Edit"
                    ></span>
                    <FontAwesomeIcon
                      icon="pencil-alt"
                      id="editbtn"
                      title="Edit"
                    />
                  </Link>
                </td>
                <td>
                  <span
                    id="deletebtn"
                    className="fa fa-trash-o"
                    title="Delete"
                  ></span>
                  <FontAwesomeIcon
                    icon="trash"
                    onClick={this.onDeleteClick.bind(this, faculty.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

FacultyTable.propTypes = {
  deleteFaculty: PropTypes.func.isRequired,
};

export default connect(null, { deleteFaculty })(FacultyTable);