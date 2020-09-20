import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addStudent } from "../../actions/studentAction";
import { getBranches } from "../../actions/branchAction";
import { getDegrees } from "../../actions/degreeAction";

class AddStudent extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      mobileNo: "",
      branchId: "",
      studentType: "",
      degreeId: "",
    };
  }

  componentDidMount() {
    this.props.getBranches();
    this.props.getDegrees();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      mobileNo: this.state.mobileNo,
      branchId: this.state.branchId,
      studentType: this.state.studentType,
      degreeId: this.state.degreeId,
    };
    console.log(newStudent);
    this.props.addStudent(newStudent, this.props.history);
  };

  render() {
    const { branches } = this.props.branch;
    const { degrees } = this.props.degree;

    let branchList = branches.map((branch, i) => {
      return (
        <option key={i} value={branch.id}>
          {branch.branchName}
        </option>
      );
    });

    let degreeList = degrees.map((degree, i) => {
      return (
        <option key={i} value={degree.id}>
          {degree.degreeName}
        </option>
      );
    });
    return (
      <div class="container">
        <h4>Enter Student Details</h4>

        <hr size="2" />

        <form onSubmit={this.onSubmit}>
          {/*<!--first row-->*/}
          <div class="row">
            {/* <div class="col-md-2">
              <label for="RollNo">Roll Number:</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="RollNo"
                  id="RollNo"
                  //required
                />
              </div>
    </div> */}
          </div>

          {/* <!--second row--> */}
          <div class="row">
            <div class="col-md-6">
              <label for="StudentName">Student Name:</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="StudentName"
                  value={this.state.name}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>

            <div class="col-md-6">
              <label for="mobileNo">Mobile Number:</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="mobileNo"
                  id="mobileNo"
                  value={this.state.mobileNo}
                  onChange={this.onChange}
                  // required
                />
              </div>
            </div>
          </div>

          {/*<!--third row-->*/}
          <div class="row">
            <div class="col-md-6">
              <label for="emailID">Email ID:</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="emailID"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>

            <div class="col-md-6">
              <label for="selectBranch">Branch:</label>
              <select
                id="selectBranch"
                name="branchId"
                value={this.state.branchId}
                onChange={this.onChange}
              >
                <option value="">Select Branch</option>
                {branchList}
              </select>
            </div>
          </div>

          {/* <!--fourth row--> */}
          <div class="row">
            <div class="col-md-6">
              <label for="password">Enter Password:</label>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>

            <div class="col-md-6">
              <label for="password">Re-Enter Password:</label>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  name="repassword"
                  id="repassword"
                  required
                />
              </div>
            </div>
          </div>

          {/* <!--fifth row--> */}
          <div class="row">
            <div class="col-md-6">
              <label for="degreeType">Degree Type:</label>
              <select
                id="degreeType"
                name="degreeId"
                value={this.state.degreeId}
                onChange={this.onChange}
              >
                <option value="">Select Degree</option>

                {degreeList}
              </select>
            </div>
          </div>

          {/* <!--sixth row--> */}
          <div class="row">
            <div class="col-md-6">
              <label>Admission Type:</label>
              <br />
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="studentType"
                    value="Regular"
                    checked={this.state.studentType === "Regular"}
                    onChange={this.onChange}
                  />
                  Regular
                </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="studentType"
                    value="DSE"
                    checked={this.state.studentType === "DSE"}
                    onChange={this.onChange}
                  />
                  Direct Second Year
                </label>
              </div>
            </div>
          </div>
          <br />
          <input
            type="submit"
            value="ADD"
            class="btn btn-default"
            id="addstudent"
          />
        </form>
      </div>
    );
  }
}

AddStudent.propTypes = {
  addStudent: PropTypes.func.isRequired,
  getBranches: PropTypes.func.isRequired,
  getDegrees: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  branch: state.branch,
  degree: state.degree,
});

export default connect(mapStateToProps, {
  addStudent,
  getBranches,
  getDegrees,
})(AddStudent);
