import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FacultyDashboard extends Component {
  render() {
    return (
      <div className="container">
        <h4>
          <FontAwesomeIcon icon="chalkboard-teacher" />
          <span>Faculty</span>
        </h4>

        {/* <!--BUTTON TO ADD --> */}
        <Link to="/addFaculty">
          <button className="btn btn-default" id="addBranch">
            Add Faculty <FontAwesomeIcon icon="plus" />
          </button>
        </Link>

        <hr size="2" />

        {/* <!--THE BOX BELOW WILL APPEAR ONLY AFTER REDIRECTING FROM ADD FACULTY PAGE, TILL THEN IT WILL BE HIDDEN. 
        AFTER ADDING DETAILS PAGE WILL REDIRECT HERE AND THIS MSG WILL APPEAR--> */}
        <div className="alert alert-success alert-dismissible fade show">
          <button type="button" className="close" data-dismiss="alert">
            &times;
          </button>
          Faculty details succesfully Added!
        </div>
        {/* <!------------------------------ALERT BOX ENDS HERE-----------------------> */}

        {/* <!--------------------TABLE STARTS HERE--------------------------> */}

        {/*    <!----Table controls like search,dropdown to sort by branch------> */}
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

        {/* <!-----------------SAMPLE TABLE FOR FRONT END PURPOSE. DYNAMIC DATA-------------->  */}
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Branch Name</th>
                <th>Branch</th>
                <th>EmailID</th>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tr>
              <td>Neha Desai</td>
              <td>Computer Engineering</td>
              <td>demo@example.com</td>
              <td>
                <Link to="/updateFaculty">
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
                <FontAwesomeIcon icon="trash" />
              </td>
            </tr>

            <tr>
              <td>Sanchit Mishra</td>
              <td>Mechanical Engineering</td>
              <td>demo@example.com</td>
              <td>
                <span className="fa fa-pencil"></span>
              </td>
              <td>
                <span id="deletebtn" className="fa fa-trash-o"></span>
              </td>
            </tr>
            <tr>
              <td>Sanchit Mishra</td>
              <td>Electrical Engineering</td>
              <td>demo@example.com</td>
              <td>
                <span className="fa fa-pencil"></span>
              </td>
              <td>
                <span id="deletebtn" className="fa fa-trash-o"></span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default FacultyDashboard;
