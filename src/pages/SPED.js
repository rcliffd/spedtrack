import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";




class SPED extends React.Component {



   render() {
       return (
           <div>
               <Jumbotron
                heading="SPED"
                />
                <div className="container">
                <a href="/NewStudent" className="btn btn-outline-secondary" role="button" aria-pressed="true">Add New Student</a>
                </div>

           </div>
       )
   } 
}

export default SPED;