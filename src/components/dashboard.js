import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div class="container">
        {/* <!--THIS IS THE CARD ROW WHICH IS STATIC. ALL BELOW CONTENT WILL BE STATIC--> */}
        <div class="row">
          {/*  <!--Card1 ACTIVITY CARD--> */}
          <div class="col-md-3">
            <div class="cards" id="activityCards">
              <h5>
                Activity
                <FontAwesomeIcon icon="calendar-check" />
              </h5>
              <div class="moreinfo">
                <a href="">
                  More Info <FontAwesomeIcon icon="info-circle" />
                </a>
              </div>
            </div>
          </div>

          {/*<!--Card2 FACULTY CARD--> */}
          <div class="col-md-3">
            <div class="cards" id="facultyCards">
              <h5>
                Faculty <FontAwesomeIcon icon="chalkboard-teacher" />
              </h5>
              <div class="moreinfo">
                <Link to="/facultyDashboard">
                  More Info <FontAwesomeIcon icon="info-circle" />
                </Link>
              </div>
            </div>
          </div>

          {/*<!--Card3 STUDENT CARD-->*/}
          <div class="col-md-3">
            <div class="cards" id="studentCards">
              <h5>
                Student <FontAwesomeIcon icon="user-graduate" />
              </h5>
              <div class="moreinfo">
                <a href="studentdashboard.html">
                  More Info <FontAwesomeIcon icon="info-circle" />
                </a>
              </div>
            </div>
          </div>

          {/*<!--Card4 BRANCH CARD-->*/}
          <div class="col-md-3">
            <div class="cards" id="branchCards">
              <h5>
                Branch <FontAwesomeIcon icon="award" />
              </h5>
              <div class="moreinfo">
                <a href="branch.html">
                  More Info <FontAwesomeIcon icon="info-circle" />
                </a>
              </div>
            </div>
          </div>

          {/*<!--Card5 DEGREE CARD--> */}
          <div class="col-md-3">
            <div class="cards" id="degreeCards">
              <h5>
                Degree <FontAwesomeIcon icon="graduation-cap" />
              </h5>
              <div class="moreinfo">
                <Link to="/degreeDashboard">
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
