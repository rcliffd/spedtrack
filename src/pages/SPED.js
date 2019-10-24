import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Goal, GoalsList, Service, ServiceList } from "../components/SpedDash/GoalsAndServices";

import { StudentOption, StudentSelect } from "../components/SpedDash/SelectStudent";
import API from "../utils/API";






class SPED extends React.Component {

    state = {
        students: [],
        clickedStudent: "",
        goal1: "",
        goal2: "",
        goal3: "",
        goal4: "",
        goal5: "",
        service1: "",
        service2: "",
        service3: "",
        service4: "",
        service5: ""
    }
 
    handleGetStudents=()=> {
        API.getStudentsBySPED("BethDuklas")
        .then(res => this.setState({ students: res.data }, function() {
            console.log(this.state)
        }))
        .catch(err => console.log(err))
    }

    getStudentById=event=> {
        const id = event.target.value;
        API.getStudentById(id)
        .then(res => this.setState({ clickedStudent : res.data.studentName, goal1 : res.data.goal1, goal2 : res.data.goal2, goal3 : res.data.goal3, goal4 : res.data.goal4, goal5 : res.data.goal5 }, function() {
            console.log(this.state)
        }))
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
                {this.state.students.length ? (
                    <StudentSelect getStudentById={this.getStudentById}>
                        {this.state.students.map(student => 

                            <StudentOption key={student._id} value={student._id} name={student.studentName}></StudentOption>
                        )}
                    </StudentSelect>
                    ) : (
                        <h3>No Students to Display</h3>

                <div className="container">
                    <a href="/NewStudent" className="btn btn-outline-secondary" role="button" aria-pressed="true">Add New Student</a>
                </div>
                </div>

           </div>
       )
   } 
}

export default SPED;