import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import StudentInfo from "../components/StudentInfo/StudentInfo";



class NewStudent extends React.Component {



   render() {
       return (
           <div>
               <Jumbotron
                heading="Add New Student"
                />
                <StudentInfo />
           </div>
       )
   } 
}

export default NewStudent;