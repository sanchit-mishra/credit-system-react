import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        {/*<!--THIS IS THE CARD ROW WHICH IS STATIC. ALL BELOW CONTENT WILL BE STATIC--> */}
        <div className="row">
          {/* <!--Card1 ACTIVITY CARD--> */}
          <div className="col-md-3">
            <div className="cards">
              <h5>
                Activity <FontAwesomeIcon icon="calendar-check" />
              </h5>
              <div className="moreinfo">
                <Link to="#">
                  More Info <FontAwesomeIcon icon="info-circle" />
                </Link>
              </div>
            </div>
          </div>

          {/*    <!--Card2 FACULTY CARD--> */}
          <div className="col-md-3">
            <div className="cards">
              <h5>
                Faculty <FontAwesomeIcon icon="chalkboard-teacher" />
              </h5>
              <div className="moreinfo">
                <Link to="/facultyDashboard">
                  More Info <FontAwesomeIcon icon="info-circle" />
                </Link>
              </div>
            </div>
          </div>

          {/* <!--Card3 STUDENT CARD--> */}
          <div className="col-md-3">
            <div className="cards">
              <h5>
                Student <FontAwesomeIcon icon="user-graduate" />
              </h5>
              <div className="moreinfo">
                <Link to="#">
                  {" "}
                  More Info <FontAwesomeIcon icon="info-circle" />
                </Link>
              </div>
            </div>
          </div>

          {/* <!--Card4--> */}
          <div className="col-md-3">
            <div className="cards">
              <h5>
                Branch <FontAwesomeIcon icon="award" />
              </h5>
              <div className="moreinfo">
                <Link to="#">
                  More Info <FontAwesomeIcon icon="info-circle" />
                </Link>
              </div>
            </div>
          </div>

          {/*  Card5 */}
          <div className="col-md-3">
            <div className="cards">
              <h5>
                Degree <FontAwesomeIcon icon="graduation-cap" />
              </h5>
              <div className="moreinfo">
                <Link to="#">
                  {" "}
                  More Info <FontAwesomeIcon icon="info-circle" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
