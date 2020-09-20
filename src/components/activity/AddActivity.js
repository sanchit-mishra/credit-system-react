import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategories } from "../../actions/categoryAction";
import { addActivity } from "../../actions/activityAction";

class AddActivity extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      categoryId: "",
      sdate: "",
      edate: "",
      hours: "",
      points: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      title: this.state.title,
      categoryId: this.state.categoryId,
      sdate: this.state.sdate,
      edate: this.state.edate,
      hours: this.state.hours,
      points: this.state.points,
    };
    console.log(newActivity);
    this.props.addActivity(newActivity, this.props.history);
  };

  render() {
    const { categories } = this.props.category;
    let categoryList = categories.map((category, i) => {
      return (
        <option key={i} value={category.id}>
          {category.categoryName}
        </option>
      );
    });

    return (
      <div class="container">
        <h4>Enter Activity Details</h4>

        <hr size="2" />

        <form onSubmit={this.onSubmit}>
          {/* <!--first row--> */}
          <div class="row">
            <div class="col-md-8">
              <label for="activtyname">Activity Name:</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  id="activtyname"
                  required
                />
              </div>
            </div>
          </div>

          {/* <!--second row--> */}
          <div class="row">
            <div class="col-md-8">
              <label for="categoryDropdown">Category:</label>
              <select
                id="categoryDropdown"
                name="categoryId"
                value={this.state.categoryId}
                onChange={this.onChange}
              >
                <option value="">Select Category</option>
                {categoryList}
              </select>
            </div>
          </div>

          {/*<!--third row-->*/}
          <div class="row">
            <div class="col-md-2">
              <label for="hours">Hours:</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="hours"
                  value={this.state.hours}
                  onChange={this.onChange}
                  id="hours"
                  required
                />
              </div>
            </div>

            <div class="col-md-2">
              <label for="points">Points:</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="points"
                  value={this.state.points}
                  onChange={this.onChange}
                  id="points"
                  required
                />
              </div>
            </div>
          </div>

          {/* <!--fourth row--> */}
          <div class="row">
            <div class="col-md-4">
              <label for="startDate">Start Date:</label>
              <div class="form-group">
                <input
                  type="date"
                  class="form-control"
                  name="sdate"
                  value={this.state.sdate}
                  onChange={this.onChange}
                  id="startDate"
                />
              </div>
            </div>

            <div class="col-md-4">
              <label for="startDate">End Date:</label>
              <div class="form-group">
                <input
                  type="date"
                  class="form-control"
                  name="edate"
                  value={this.state.edate}
                  onChange={this.onChange}
                  id="startDate"
                />
              </div>
            </div>
          </div>
          <br />
          {/* <!--fifth row--> */}
          <div class="row">
            <div class="col-md-6">
              <div class="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="certificate"
                  name="certificate"
                />
                <label class="custom-control-label" for="certificate">
                  CERTIFICATION REQUIRED?
                </label>
              </div>
            </div>
          </div>

          <br />

          <input
            type="submit"
            value="ADD"
            class="btn btn-default"
            id="addactivity"
          />
        </form>
      </div>
    );
  }
}

AddActivity.propTypes = {
  getCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  addActivity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { getCategories, addActivity })(
  AddActivity
);
