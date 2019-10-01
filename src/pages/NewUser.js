import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import NewUserState from "../components/NewUser/NewUserState"
import NewUserDistrict from "../components/NewUser/NewUserDistrict"
import NewUserSite from "../components/NewUser/NewUserSite"
import NewUserName from "../components/NewUser/NewUserName"
import SchoolCode from "../components/NewUser/SchoolCode"
import FormBtn from "../components/NewUser/FormBtn"
import API from "../utils/API";



class NewUser extends React.Component {
    state = {
        districts: [],
        sites: [],
        teachers: [],
        teacherClicked: false,
        schoolCode: "",
        codeMatch: false
    }

   handleStateClicked=event=> {
       const USstate = event.target.value
       API.getStateDistricts(USstate)
       .then(res => this.setState({ districts: res.data }, function() {
           console.log(this.state)
       }))
       .catch(err => console.log(err))
   }


   render() {
       return (
           <div>
               <Jumbotron
                heading="New User"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 card">
                        <NewUserState handleStateClicked={this.handleStateClicked}></NewUserState>
                        {this.state.districts.length ? (
                            <NewUserDistrict></NewUserDistrict>
                        ) : (
                            <h5>Selected state does not have registered districts</h5>
                        )}
                        {this.state.sites.length ? (
                            <NewUserSite></NewUserSite>
                        ) : (
                            <h5>Selected district does not have registered sites</h5>
                        )}  
                        </div>
                        
                        <div className="col-md-6 card">
                        {this.state.districts.length ? (
                        <NewUserName></NewUserName>
                        ) : (
                            <h5>Selected site does not have registered staff</h5>
                        )}
                        {this.state.teacherClicked ? (
                        <div>
                        <SchoolCode></SchoolCode>
                        <FormBtn id="Submit" onClick={this.runCheckCode}>Submit</FormBtn>
                        </div>                           
                        ) : (
                            <h5> </h5>
                        )}

                        </div>
                    </div>
                
                </div>

           </div>
       )
   } 
}

export default NewUser;