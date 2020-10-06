import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getActCat } from "../../actions/activityAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteActivity } from "../../actions/activityAction";
import Header from "../layout/header";

class ActivityView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getActCat(id);
  }

  onDeleteClick(id) {
    this.props.deleteActivity(id, this.props.history);
  }
  render() {
    const { activityCategory } = this.props.activity;

    // const category = activityCategory.map((activity) => activity.title);
    // console.log(category);
    const docRequired = activityCategory.docRequired ? "Yes" : "No";
    console.log(activityCategory);
    //console.log(activityCategory.Category);
    //console.log(activityCategory.Category.categoryName);
    // console.log(activityCategory.Faculties.name);
    //const Faculties = [...activityCategory.Faculties];
    //const Faculties = activityCategory.Faculties.slice();
    //console.log(Faculties);
    let { Category } = activityCategory;
    //console.log(Category["categoryName"]);
    //let facultiesName = Faculties.map((faculty) => faculty.name);

    // let facultiesName = activityCategory.Faculties.map(
    //   (activity) => activity.name
    // );
    // console.log(facultiesName);
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h4>Activity</h4>
          <hr size="2" />

          <h5>{activityCategory.title}</h5>
          <div className="actDeails">
            <b>Category: </b>
            <br />
            <br />
            <b>Start Date:</b> {activityCategory.sDate}
            <br />
            <b>End Date:</b> &nbsp; {activityCategory.eDate} <br />
            <br />
            <b>Hours:</b> {activityCategory.hours} <br />
            <b>Points:</b> {activityCategory.points} <br />
            <br />
            <b>Certifiction required? </b>
            {docRequired}
            <br />
            <br />
            <b>Faculty Associated:</b>
            <br />
            <div className="facultyassoc">
              <div className="facultyName">Neha Desai (CMPN)</div>
              <div className="facultyName">Sanchit Mishra (CMPN)</div>
              <div className="facultyName">Omkar Sawant (CMPN)</div>
              <div className="facultyName">Bimlesh(CMPN)</div>
            </div>
          </div>

          <br />
          <div className="actionbtn">
            <button
              className="btn btn-danger"
              onClick={this.onDeleteClick.bind(this, activityCategory.id)}
            >
              Delete{" "}
              <FontAwesomeIcon icon="trash" id="deletebtn" title="Delete" />
            </button>

            <button className="btn btn-primary">
              Edit <span className="fa fa-pencil"></span>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ActivityView.propTypes = {
  getActCat: PropTypes.func.isRequired,
  deleteActivity: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  activity: state.activity,
});

export default connect(mapStateToProps, { getActCat, deleteActivity })(
  ActivityView
);
