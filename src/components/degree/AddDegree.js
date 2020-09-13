import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDegree } from "../../actions/degreeAction";

class AddDegree extends Component {
  constructor() {
    super();

    this.state = {
      degree: "",
      year: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newDegree = {
      degree: this.state.degree,
      year: this.state.year,
    };
    console.log(newDegree);
    this.props.addDegree(newDegree, this.props.history);
  };

  render() {
    return (
      <div class="row">
        <div class="col-md-4">
          <input
            type="text"
            name="degree"
            id="degreeName"
            class="form-control"
            placeholder="Enter Degree Name"
            value={this.state.degree}
            onChange={this.onChange}
          />
        </div>
        <div class="col-md-4">
          <input
            type="text"
            name="year"
            id="noofyears"
            class="form-control"
            placeholder="Enter No. of Years"
            value={this.state.year}
            onChange={this.onChange}
          />
        </div>
        <button class="btn btn-default" id="addDegree" onClick={this.onSubmit}>
          Add Degree <FontAwesomeIcon icon="plus" />
        </button>
      </div>
    );
  }
}

AddDegree.propTypes = {
  addDegree: PropTypes.func.isRequired,
  degree: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  degree: state.degree,
});

export default connect(mapStateToProps, { addDegree })(AddDegree);
