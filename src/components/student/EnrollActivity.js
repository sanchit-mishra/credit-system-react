import React, { Component } from "react";
import SideNav from "./StudentSideNav";
import TopNav from "./StudentTopNav";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategories } from "../../actions/categoryAction";
import { getActivities } from "../../actions/activityAction";
import { enrollActivity } from "../../actions/studentActivityAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EnrollActivity extends Component {
  constructor() {
    super();

    this.state = {
      studentId:"",
      activityDetailId: "",
      certificate: "",
    };

    //this.onChangeActivity = this.onChangeActivity.bind(this);
    //this.onChangeFile = this.onChangeFile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getActivities();
  }

  // onChangeActivity(e) {
  //   this.setState({ activityDetailId: e.target.value });
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  // onChangeFile(e) {
  //   var file = e.target.files[0];
  //   console.log(file);
  //   this.setState({
  //     certificate: file,
  //   });
  // }

  onSubmit(e) {
    e.preventDefault();
    const enrollApplication = {
      activityDetailId: this.state.activityDetailId,
      certificate: this.state.certificate,
      studentId: this.props.student.studentId,
    };
  
    // let enrollApplication = new FormData();
    // enrollApplication.append("certificate", this.state.certificate);
    // enrollApplication.append("activityDetailId", this.state.activityDetailId);
    // enrollApplication.append("studentId", 2);
    // console.log(enrollApplication);
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
                    onChange={this.onChange}
                  >
                    <option value="">Select Activity</option>

                    {activityList}
                  </select>
                </div>
              </div>
              <br />
          <div className="row">
          <div className="col-md-6">
            <label for="DocUrl">Enter URL of Cetificate Uploaded on Google Drive:</label>
            <input
              type="text"
              id="DocURL"
              name="certificate"
              value={this.state.certificate}
              onChange={this.onChange}
              style={{
                padding: "5px 5px 5px 5px",
                borderRadius: "3px",
                border: "1px solid lightgrey",
                width: "100%",
                marginTop: "3%",
              }}
              placeholder="URL of Google Drive "
            />
          </div>
        </div>
        <br /><br />
        <p style={{color: "grey"}}>
          <FontAwesomeIcon icon="exclamation-circle" /> Make sure that Anyone with
          Link option is selected for the file whose URL you are uploading!
        </p>
        <img src="share.png" height="200" width="300" alt="link sharing note"/>
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
  student: PropTypes.object.isRequired,
  enrollActivity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
  activity: state.activity,
  student: state.student,
});

export default connect(mapStateToProps, {
  getCategories,
  getActivities,
  enrollActivity,
})(EnrollActivity);
