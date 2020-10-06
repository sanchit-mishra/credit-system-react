import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopNav extends Component {
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
  render() {
    return (
      <div className="topNav">
        <FontAwesomeIcon id="humMenu" icon="bars" onClick={this.closeNav} />
        <div className="profile">
          <FontAwesomeIcon icon="user-circle" className="profileID" /> Neha
          Desai!
          <Link to="#" data-toggle="tooltip" title="Logout">
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

export default TopNav;
