import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import StudentInfo from "../components/StudentInfo/StudentInfo"
import FormOptions from "../components/StudentInfo/FormOptions"
import Input from "../components/StudentInfo/Input"
import ClassDays from "../components/ClassDays/ClassDays"
import FormBtn from "../components/StudentInfo/FormBtn"
import API from "../utils/API";




class NewStudent extends React.Component {

    state={
        students: [],
        studentName: "",
        mathLevel: "",
        readingLevel: "",
    }

    handleInputChange=event=> {
        
        const {name, value} = event.target;
        console.log(name, value)
        this.setState({
            [name] : value
        })
    }


    handleFormSubmit=event=> {
        event.preventDefault();
       
        if(this.state.studentName) {
           
            
            API.createStudent({
                studentName: this.state.studentName,
                mathLevel: this.state.mathLevel,
                readingLevel: this.state.readingLevel
                
            })
            .then(res =>
                
                this.setState({ students: res.data, studentName: "", mathLevel: "", readingLevel: ""})
              )
            .catch(err=> console.log(err));
            
        }
       
    };

    

   render() {
       return (
           <div>
               <Jumbotron
                heading="Add New Student"
                />
                <div className="container">
                <StudentInfo/>
                <form>
                <Input
                value={this.state.studentName}
                handleInputChange={this.handleInputChange}
                name="studentName"
                type="text"
                placeholder="Student's First and Last Name"
                />
                </form>
                <FormOptions
                value={this.state.value}
                handleInputChange={this.handleInputChange}
                />
                <ClassDays></ClassDays>
                <FormBtn
                onClick={this.handleFormSubmit}
                >
                    Add New Student
                </FormBtn>
                </div>
           </div>
       )
   } 
}

export default NewStudent;