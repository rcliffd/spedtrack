import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { StudentOption, StudentSelect } from "../components/SpedDash/SelectStudent";
import API from "../utils/API";





class SPED extends React.Component {
    state = {
        students: []
    }
 
    handleGetStudents=event=> {
        API.getStudentsBySPED("Beth Duklas")
        .then(res => this.setState({ students: res.data }))
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
            
                {this.state.students.length ? (
                    <StudentSelect>
                        {this.state.students.map(student => 
                            <StudentOption key={student._id}>
                                <a href={"api/students/" + student._id}>
                                    <strong>
                                    {student.studentName}
                                    </strong>
                                    </a>
                                
                                
                                
                                             
                            </StudentOption>
                        )}
                    </StudentSelect>
                    ) : (
                        <h3>No Students to Display</h3>
                      )}
                )} 
                
                
                <div className="container">
                <a href="/NewStudent" className="btn btn-outline-secondary" role="button" aria-pressed="true">Add New Student</a>
                </div>

           </div>
       )
   } 
}

export default SPED;