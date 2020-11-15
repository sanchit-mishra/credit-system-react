import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../actions/userAction";

class TopNav extends Component {
  constructor() {
    super();
    this.closeNav = this.closeNav.bind(this);
  }

  logout(){
    this.props.logout();
    window.location.href="/";
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
  render() {
    const firstname = this.props.firstname;
    const lastname = this.props.lastname;
    return (
      <div className="topNav">
        <FontAwesomeIcon id="humMenu" icon="bars" onClick={this.closeNav} />
        <div className="profile">
          <FontAwesomeIcon icon="user-circle" className="profileID" /> {firstname}
          {lastname}!
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

TopNav.propTypes = {
  logout:PropTypes.func.isRequired,
}

export default connect(null,{logout})(TopNav);
