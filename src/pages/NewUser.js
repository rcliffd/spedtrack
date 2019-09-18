import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import NewUserState from "../components/NewUser/NewUserState"



class NewUser extends React.Component {



   render() {
       return (
           <div>
               <Jumbotron
                heading="New User"
                />
                <div className="container">
                <div className="col-md-6 card">
                    <NewUserState></NewUserState>
                </div>
                </div>

           </div>
       )
   } 
}

export default NewUser;