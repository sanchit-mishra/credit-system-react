import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFaculty } from "../../actions/facultyAction";

class AddFaculty extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      branch: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newFaculty = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      branch: this.state.branch,
    };
    console.log(newFaculty);
    this.props.addFaculty(newFaculty, this.props.history);
  }

  render() {
    return (
      <div className="container">
        <h4>Enter Faculty Details</h4>

        <hr size="2" />

        {/* <!-----------------FORMS STARTS HERE-------------------------> */}

        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label for="facultyName">Faculty Name:</label>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="facultyName"
                  placeholder="Enter Faculty Name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="selectBranch">Branch:</label>
              <select
                id="selectBranch"
                name="branch"
                value={this.state.branch}
                onChange={this.onChange}
              >
                <option value="">Select Branch</option>
                {/* <!--this list will come from backend from branch table. Given data is for demo--> */}
                <option value="0">Mechanical Engineering</option>
                <option value="1">Computer Engineering</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label for="emailID">Email ID:</label>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="emailID"
                  placeholder="Enter Email ID"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <label for="Password">Password:</label>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="Password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <br />

          {/* <!--BUTTON TO ADD --> */}
          <button className="btn btn-default" id="addBranch">
            ADD
          </button>
        </form>
      </div>
    );
  }
}

AddFaculty.propTypes = {
  addFaculty: PropTypes.func.isRequired,
  faculty: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  faculty: state.faculty,
});

export default connect(mapStateToProps, { addFaculty })(AddFaculty);
