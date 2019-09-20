import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import NewUserState from "../components/NewUser/NewUserState"
import NewUserDistrict from "../components/NewUser/NewUserDistrict"
import NewUserSite from "../components/NewUser/NewUserSite"
import NewUserName from "../components/NewUser/NewUserName"
import SchoolCode from "../components/NewUser/SchoolCode"



class NewUser extends React.Component {



   render() {
       return (
           <div>
               <Jumbotron
                heading="New User"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 card">
                        <NewUserState></NewUserState>
                        <NewUserDistrict></NewUserDistrict>
                        <NewUserSite></NewUserSite>
                        </div>
                        
                        <div className="col-md-6 card">
                        <NewUserName></NewUserName>
                        <SchoolCode></SchoolCode>
                        </div>
                    </div>
                
                </div>

           </div>
       )
   } 
}

export default NewUser;