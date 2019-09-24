import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";




class SPED extends React.Component {
   state = {
       students: []
   }

   handleGetStudents=event=> {
       API.getStudentsBySPED("Beth Duklas")
       .then(res => console.log(res))
       .catch(err => console.log(err))
   }

   componentDidMount() {
       this.handleGetStudents()
   }


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