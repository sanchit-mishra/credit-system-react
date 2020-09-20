import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/FontAwesomeIcons/faicons";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../src/components/dashboard";
import AddFaculty from "./components/faculty/AddFaculty";
import FacultyDashboard from "./components/faculty/FacultyDashboard";
import UpdateFaculty from "./components/faculty/UpdateFaculty";
import DegreeDashboard from "./components/degree/DegreeDashboard";
import Header from "./components/layout/header";
import BranchDashboard from "./components/branch/BranchDashboard";
import StudentDashboard from "./components/student/StudentDashboard";
import AddStudent from "./components/student/AddStudent";
import UpdateStudent from "./components/student/UpdateStudent";
import ActivityDashboard from "./components/activity/ActivityDashboard";
import AddActivity from "./components/activity/AddActivity";
import AssignActivity from "./components/activity/AssignActivity";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Dashboard} />
          {/* Faculty Use Route */}
          <Route exact path="/facultyDashboard" component={FacultyDashboard} />
          <Route exact path="/addFaculty" component={AddFaculty} />
          <Route exact path="/updateFaculty/:id" component={UpdateFaculty} />
          {/* Degree Use Route */}
          <Route exact path="/degreeDashboard" component={DegreeDashboard} />
          {/* Branch Use Route */}
          <Route exact path="/branchDashboard" component={BranchDashboard} />
          {/* Student Use Route */}
          <Route exact path="/studentDashboard" component={StudentDashboard} />
          <Route exact path="/addStudent" component={AddStudent} />
          <Route exact path="/updateStudent/:id" component={UpdateStudent} />
          {/* Activity Use Route */}
          <Route
            exact
            path="/activityDashboard"
            component={ActivityDashboard}
          />
          <Route exact path="/addActivity" component={AddActivity} />
          <Route exact path="/assignActivity" component={AssignActivity} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
