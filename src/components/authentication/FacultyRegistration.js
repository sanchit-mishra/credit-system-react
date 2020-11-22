import React, { Component } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBranches} from "../../actions/branchAction";
import {registerFaculty} from "../../actions/userAction";

class FacultyRegistration extends Component{
    constructor(){
        super();

        this.state = {
            firstName:"",
            middleName:"",
            lastName:"",
            erpId:"",
            email:"",
            mobileNo:"",
            password:"",
            branchId:"",
            DOB:"",
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getBranches();
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const facultyRegisterInfo = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            erpId: this.state.erpId,
            mobileNo: this.state.mobileNo,
            email: this.state.email,
            password: this.state.password,
            branchId: this.state.branchId,
            DOB: this.state.DOB,
        }
        this.props.registerFaculty(facultyRegisterInfo, this.props.history);
    }

    render(){
        const {branches} = this.props.branch;

        const branchList = branches.map((branch) => (
            <option value={branch.id}>{branch.branchName}</option>
        ))

        return(
        <div className="registerMainDiv">
            <div className="rcenterMainDiv">
                <div className="registerTitle"><b>TCET ACTIVITY PORTAL</b></div>

            <div id="formMain" >
            <p>Enter Details:</p>
        
            <div className="row">      
              <div className="col-md-4"><input type="text" placeholder="First Name" id="fname" /></div>
              <div className="col-md-4"><input type="text" placeholder="Middle Name" /></div>
              <div className="col-md-4"><input type="text" placeholder="Last Name" /></div>
            </div>
              
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="ERP ID" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Email ID" />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Mobile Number" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input type="password" placeholder="Enter Password" />
              </div>
              <div className="col-md-6">
                <input type="password" placeholder="Re-Enter Password" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
              <select id="selectDrp">
                <option value="">Branch</option>
                {branchList}
              </select>
             </div>
            </div>
            
        <br />
            <div className="row">
              <div className="col-md-6">
                    Date Of Birth:
                    <input type="date" style={{marginTop: "0px"}} />
                </div>
            </div>

        <br />
              <button class="btn btn-primary">Register</button>
            </div>
        </div>
    </div>
        )
    }
}

FacultyRegistration.propTypes = {
    getBranches: PropTypes.func.isRequired,
    branch: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    branch: state.branch,
})

export default connect(mapStateToProps, {getBranches, registerFaculty })(FacultyRegistration);