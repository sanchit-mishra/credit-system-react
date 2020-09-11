import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/FontAwesomeIcons/faicons";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../src/components/dashboard";
import AddFaculty from "./components/faculty/AddFaculty";
import FacultyDashboard from "./components/faculty/FacultyDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        {/* Faculty Use Route */}
        <Route exact path="/facultyDashboard" component={FacultyDashboard} />
        <Route exact path="/addFaculty" component={AddFaculty} />
      </div>
    </Router>
  );
}

export default App;
