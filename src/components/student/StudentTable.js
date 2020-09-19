import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class StudentTable extends Component {
  render() {
    const { students } = this.props;

    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Branch</th>
              <th>EmailID</th>
              <th>Mobile No</th>
              <th>Admission Type</th>
              <td>Degree</td>
              <td></td>
            </tr>
          </thead>
          {students.map((student) => (
            <tr>
              <td>{student.name}</td>
              <td>{student.branchId}</td>
              <td>{student.email}</td>
              <td>{student.mobileNo}</td>
              <td>{student.studentType}</td>
              <td>{student.degreeId}</td>
              <td>
                <FontAwesomeIcon id="editbtn" icon="pencil-alt" title="Edit" />
              </td>
              <td>
                <FontAwesomeIcon id="deletebtn" icon="trash" title="Delete" />
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default StudentTable;
