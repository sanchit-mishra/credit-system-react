import React, { Component } from "react";
import SideNav from "./SideNav";
import StudentActivityStatus from "./StudentActivityStatus";
import TopNav from "./TopNav";


class StudentLoginDash extends Component {
  
  render() {
  
    return (
      <React.Fragment>
        <SideNav />
        <div id="main" className="openmain">
          <TopNav />

          <div class="row">
            <div class="col-md-6">
              <div class="maindivs">
                <h5>Your Progress:</h5>
                <p>
                  You have to complete the targeted points so that you can
                  appear for your final year exams.
                </p>

                <progress
                  class="progress-bar progress-bar-success"
                  id="ptsprogress"
                  value="32"
                  max="100"
                >
                  32%
                </progress>
                <div class="progresspts">
                  <span>0</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="maindivs">
                <div class="ptsdetails" id="completedPts">
                  <h1>30</h1>
                  Points completed till now
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="maindivs">
                <div class="ptsdetails" id="tobecompleted">
                  <h1>70</h1>
                  Points to be complete
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="maindivs">
                <div class="ptsdetails" id="noofact">
                  <h1>10</h1>
                  Activities participated
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </React.Fragment>
    );
  }
}





export default 
  StudentLoginDash
;
