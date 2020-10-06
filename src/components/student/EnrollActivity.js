import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategories } from "../../actions/categoryAction";
import { getActivities } from "../../actions/activityAction";
import { enrollActivity } from "../../actions/studentActivityAction";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

class EnrollActivity extends Component {
  constructor() {
    super();

    this.state = {
      activityDetailId: "",
      certificate: null,
    };

    this.onChangeActivity = this.onChangeActivity.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getActivities();
  }

  onChangeActivity(e) {
    this.setState({ activityDetailId: e.target.value });
  }

  onChangeFile(e) {
    var file = e.target.files[0];
    console.log(file);
    this.setState({
      certificate: file,
    });
  }

  onSubmit(e) {
    // const enrollApplication = {
    //   activityDetailId: this.state.activityDetailId,
    //   certificate: this.state.certificate,
    //   studentId: 10,
    // };
    // console.log(enrollApplication);
    let enrollApplication = new FormData();
    enrollApplication.append("certificate", this.state.certificate);
    enrollApplication.append("activityDetailId", this.state.activityDetailId);
    enrollApplication.append("studentId", 2);
    console.log(enrollApplication);
    this.props.enrollActivity(enrollApplication, this.props.history);
  }

  render() {
    const { categories } = this.props.category;
    let categoryList = categories.map((category, i) => {
      return (
        <option key={i} value={category.id}>
          {category.categoryName}
        </option>
      );
    });

    const { activities } = this.props.activity;
    let activityList = activities.map((activity, i) => {
      return (
        <option key={i} value={activity.id}>
          {activity.title}
        </option>
      );
    });
    return (
      <React.Fragment>
        <SideNav />
        <div id="main" className="openmain">
          <TopNav />
          <div className="maindivs" id="pageHeading">
            <h5>Enroll for Activity</h5>
          </div>
          <div className="maindivs">
            <form encType="multipart/form-data" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="selectDrp">Select Category:</label>
                  <select id="selectDrp">
                    <option value="">Select Category</option>
                    {categoryList}
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="selectDrp">Select Activity:</label>
                  <select
                    id="selectDrp"
                    name="activityDetailId"
                    value={this.state.activityDetailId}
                    onChange={this.onChangeActivity}
                  >
                    <option value="">Select Activity</option>

                    {activityList}
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label>Upload your Certificate:</label>
                  <br />

                  <input
                    type="file"
                    name="certificate"
                    onChange={this.onChangeFile}
                  />
                </div>
              </div>

              <br />
              <div className="btnDiv">
                <button className="btn" id="applybtn">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

EnrollActivity.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getActivities: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  activity: PropTypes.object.isRequired,
  enrollActivity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
  activity: state.activity,
});

export default connect(mapStateToProps, {
  getCategories,
  getActivities,
  enrollActivity,
})(EnrollActivity);
