import React, { Component } from "react";
import FacultySideNav from "./FacultySideNav";
import FacultyTopNav from "./FacultyTopNav";

class RejectedStudent extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <FacultySideNav aid={id} />
        <div id="main" className="openmain">
          <FacultyTopNav />
          <div className="maindivs">
            <div className="row">
              <div className="col-md-2">
                <select id="sortdrp">
                  <option value="">Sort By Branch</option>

                  <option value="">Computer Engineering</option>
                  <option value="">Mechanical Engineering</option>
                </select>
              </div>

              <div className="col-md-7">
                <select id="sortdrp">
                  <option value="">Sort By Degree</option>

                  <option value="">BTECH</option>
                  <option value="">BTECH</option>
                </select>
              </div>

              <input type="text" placeholder="Search" id="searchBtn" required />
              <button className="btn btn-light" id="search">
                Search
              </button>
            </div>
          </div>

          <div className="maindivs">
            <b>Rejected Student:</b> Paper Presentation
            <br />
            <br />
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Student Name</th>
                    <th>Year</th>
                    <th>Division</th>
                    <th>Roll No. </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Neha Desai</td>
                    <td>TE</td>
                    <td>A</td>
                    <td>68</td>
                    <td>
                      <button className="btn btn-primary">Display</button>
                      <button className="btn btn-success">Approve</button>
                      <button className="btn btn-info">Add to Pending</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RejectedStudent;
