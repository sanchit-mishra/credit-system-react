import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="header" id="header">
          <Link to="admindashboard.html" className="logo">
            <b>Internship Portal</b>
          </Link>
          <Link to="/home" className="active">
            Home
          </Link>
          <Link to="/news">Branch</Link>
          <Link to="/contact">Degree</Link>
          <Link to="/facultydashboard.html">Faculty</Link>
          <Link to="/about">Student</Link>
          <Link to="/about">Activity</Link>

          <Link>
            Hello,<b> Admin !</b>
          </Link>
          {/* <Link
            href="javascript:void(0);"
            className="icon"
            onclick="myFunction()"
          >
            <FontAwesomeIcon icon="bars" />
          </Link> */}
        </div>
      </div>
    );
  }
}

export default Header;
