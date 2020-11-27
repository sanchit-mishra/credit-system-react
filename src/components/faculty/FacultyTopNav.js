import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {logout} from "../../actions/userAction";
import {connect} from "react-redux";
import {getFaculty} from "../../actions/facultyAction";
import PropTypes from "prop-types";

class FacultyTopNav extends Component {
  constructor() {
    super();
    this.closeNav = this.closeNav.bind(this);
  }

  closeNav() {
    var sidebar = document.getElementById("sideNavbar");
    var mainDiv = document.getElementById("main");

    if (sidebar.className === "sideNavbar") {
      sidebar.classList.add("closebar");
      mainDiv.classList.add("closemain");
    } else {
      sidebar.classList.remove("closebar");
      mainDiv.classList.remove("closemain");
    }
  }

  logout(){
    this.props.logout();
    window.location.href="/";
  }
  
  render() {
 
    const firstname = this.props.firstname;
    const lastname = this.props.lastname;
    console.log(firstname);
    return (
      <div className="topNav">
        <FontAwesomeIcon id="humMenu" icon="bars" onClick={this.closeNav} />
        <div className="profile">
          <FontAwesomeIcon icon="user-circle" className="profileID" />&nbsp; {firstname} {lastname} ! &nbsp;
          <Link to="/" data-toggle="tooltip" title="Logout" onClick={this.logout.bind(this)}>
            <FontAwesomeIcon
              icon="power-off"
              className="profileID"
              id="logoutbtn"
              alt="logout"
            />
          </Link>
        </div>
      </div>
    );
  }
}

FacultyTopNav.propTypes = {
  logout:PropTypes.func.isRequired,
}


export default connect(null,{logout})(FacultyTopNav);
