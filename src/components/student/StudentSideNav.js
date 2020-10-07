import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="sideNavbar" id="sideNavbar">
      <Link to="/" id="webName">
        ACTIVITY PORTAL
      </Link>
      <br />
      <Link to="/studentProfile">
        <FontAwesomeIcon icon="columns" /> Dashboard
      </Link>
      <Link to="/enrollStudentActivity">
        <FontAwesomeIcon icon="calendar-plus" /> Enroll for Activity
      </Link>
      <Link to="/studentActivityStatus">
        <FontAwesomeIcon icon="calendar-times" /> Activity Status
      </Link>
      <Link to="/">
        <FontAwesomeIcon icon="calendar-check" /> Approved Activity
      </Link>
    </div>
  );
}
