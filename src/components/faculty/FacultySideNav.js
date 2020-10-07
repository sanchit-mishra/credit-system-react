import React from "react";
import { Link } from "react-router-dom";

export default function FacultySideNav(props) {
  const aid = props.aid;
  //console.log(aid);
  return (
    <div id="sideNavbar" className="sideNavbar">
      <Link to="/" className="webName">
        ACTIVITY PORTAL
      </Link>
      <br />
      <Link to="/facultyProfile">Dashboard</Link>
      <Link to={`/pendingApproval/${aid}`}>Pending Approval</Link>
      <Link to={`/rejectedStudent/${aid}`}>Rejected Students</Link>
      <Link to="approvedStudent.html">Approved Students</Link>
    </div>
  );
}
