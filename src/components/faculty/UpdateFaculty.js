import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFaculty } from "../../actions/facultyAction";

class UpdateFaculty extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getFaculty(id, this.props.history);
  }
  render() {
    return (
      <div class="container">
        <h4> Edit Faculty Details</h4>
        <hr size="2" />

        <form method="" action="">
          <label>Faculty Name:</label>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              placeholder="Enter Faculty Name"
            />
            <br />
            <label>Branch:</label>
            <select id="selectBranch">
              <option value="">Select Branch</option>
              <option value="">Mechanical Engineering</option>
              <option value="">Computer Engineering</option>
            </select>

            <br />
            <label>Email ID:</label>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                placeholder="Enter Email ID"
              />
              <br />
              <label>Password:</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  placeholder="Enter Password"
                />
                <br />
                <button class="btn btn-default" id="addBranch">
                  Add Faculty{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

UpdateFaculty.propTypes = {
  faculty: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  getFaculty: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  faculty: state.faculty.faculty,
  error: state.error,
});

export default connect(mapStateToProps, { getFaculty })(UpdateFaculty);
