import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import StudentInfo from "../components/StudentInfo/StudentInfo"
import FormOptions from "../components/StudentInfo/FormOptions"
import Input from "../components/StudentInfo/Input"
import ClassDays from "../components/ClassDays/ClassDays"
import TeacherList from "../components/TeacherList/TeacherList"
import Hours from "../components/Hours/Hours"
import FormBtn from "../components/StudentInfo/FormBtn"
import API from "../utils/API";
import NewScheduleTable from "../components/StudentInfo/NewScheduleTable";


var days = [];



class NewStudent extends React.Component {



    state={
        students: [],
        hours: 1,
        TeacherList: "teacher 1 name",
        studentName: "",
        mathLevel: "",
        readingLevel: "",
        SPEDteacher: "",
        Mon1Teacher: "", 
        Mon2Teacher: "", 
        Mon3Teacher: "", 
        Mon4Teacher: "", 
        Mon5Teacher: "", 
        Mon6Teacher: "", 
        Mon7Teacher: "", 
        Mon8Teacher: "", 
        Mon9Teacher: "", 
        Tues1Teacher: "", 
        Tues2Teacher: "", 
        Tues3Teacher: "", 
        Tues4Teacher: "", 
        Tues5Teacher: "", 
        Tues6Teacher: "", 
        Tues7Teacher: "", 
        Tues8Teacher: "", 
        Tues9Teacher: "", 
        Wed1Teacher: "", 
        Wed2Teacher: "", 
        Wed3Teacher: "", 
        Wed4Teacher: "", 
        Wed5Teacher: "", 
        Wed6Teacher: "", 
        Wed7Teacher: "", 
        Wed8Teacher: "", 
        Wed9Teacher: "",     
        Thur1Teacher: "", 
        Thur2Teacher: "", 
        Thur3Teacher: "", 
        Thur4Teacher: "", 
        Thur5Teacher: "", 
        Thur6Teacher: "", 
        Thur7Teacher: "", 
        Thur8Teacher: "", 
        Thur9Teacher: "", 
        Fri1Teacher: "", 
        Fri2Teacher: "", 
        Fri3Teacher: "", 
        Fri4Teacher: "", 
        Fri5Teacher: "", 
        Fri6Teacher: "", 
        Fri7Teacher: "", 
        Fri8Teacher: "", 
        Fri9Teacher: "" 
    }

    
    

    handleInputChange=event=> {
        const {name, value, type} = event.target;

        
        let key = [`Mon${this.state.hours}Teacher`, `Tues${this.state.hours}Teacher`, `Wed${this.state.hours}Teacher`, `Thur${this.state.hours}Teacher`, `Fri${this.state.hours}Teacher`]
        let i;
        
           
        
        
        console.log(name, value, type)
        
        if(type === "select-one" && name === "teacherList") {
            let teacher = `${value}`
            this.setState({
                TeacherList : teacher
            }, function() {
                console.log(this.state)
            })
        }
        if(type === "checkbox" && value === "Week") {
            days.push(`${value}`)

            
            
            for ( i = 0; i < key.length; i++) {
            

            this.setState({
                [key[i]]: event.target.checked ? this.state.TeacherList : ""
            }, function() {
                console.log(this.state)
            })}
            

            // console.log(key)
            //     console.log(event.target.checked)
            // this.setState({
            //     [key[i]] : event.target.checked ? this.state.TeacherList : ""
            // }, function() {
            //     console.log(this.state)
            // })}
        } else if (type === "checkbox") {
                days.push(`${value}`)
                let key = `${value}${this.state.hours}Teacher`;
                console.log(key)
                // console.log(event.target.checked)
                this.setState({
                    [key] : event.target.checked ? this.state.TeacherList : ""
                }, function() {
                    console.log(this.state)
                })
            } else {
                this.setState({
                    [name] : value
                })
        
            this.setState({
                [name] : value
            })
        // if(type === "checkbox") {
        //     let key = `${value}${this.state.hours}Teacher`;
        //     console.log(key)
        //     console.log(event.target.checked)
        //     this.setState({
        //         [key] : event.target.checked ? this.state.TeacherList : ""
        //     }, function() {
        //         console.log(this.state)
        //     })
        // } else {
        //     this.setState({
        //         [name] : value
        //     })
        
        }
        
    }

    // testRoute=event=> {
    //     event.preventDefault();
    //     API.getStudentsByDayAndHour("Mon4Teacher", "JoshJackson")
    //     .then(res => console.log(res))
    // }

    

    handleHoursSubmit=event=> {
        event.preventDefault();
        
        var studentDiv = document.getElementById("schedule-table");
        var newStudentRow = document.createElement("tr");
        var newStudentTeacher = document.createElement("td");
        var newStudentHours = document.createElement("td");
        var newStudentDays = document.createElement("td");
        
        newStudentTeacher.textContent = this.state.TeacherList
        newStudentHours.textContent = this.state.hours
        
        newStudentDays.textContent = days.join(", ");
        

        newStudentRow.append(newStudentTeacher);
        newStudentRow.append(newStudentHours);
        newStudentRow.append(newStudentDays);
         
        studentDiv.append(newStudentRow);

        days = [];
        console.log(days)

        

    }




    handleFormSubmit=event=> {
        event.preventDefault();
       
        if(this.state.studentName) {
           
            
            API.createStudent({
                studentName: this.state.studentName,
                mathLevel: this.state.mathLevel,
                readingLevel: this.state.readingLevel,
                SPEDteacher: this.state.SPEDteacher,
                goal1: "",
                goal2: "",
                goal3: "",
                goal4: "",
                goal5: "",
                service1: "",
                service2: "",
                service3: "",
                service4: "",
                service5: "",
                Mon1Teacher: this.state.Mon1Teacher, 
                Mon2Teacher: this.state.Mon2Teacher, 
                Mon3Teacher: this.state.Mon3Teacher, 
                Mon4Teacher: this.state.Mon4Teacher, 
                Mon5Teacher: this.state.Mon5Teacher, 
                Mon6Teacher: this.state.Mon6Teacher, 
                Mon7Teacher: this.state.Mon7Teacher, 
                Mon8Teacher: this.state.Mon8Teacher, 
                Mon9Teacher: this.state.Mon9Teacher, 
                Tues1Teacher: this.state.Tues1Teacher, 
                Tues2Teacher: this.state.Tues2Teacher, 
                Tues3Teacher: this.state.Tues3Teacher, 
                Tues4Teacher: this.state.Tues4Teacher, 
                Tues5Teacher: this.state.Tues5Teacher, 
                Tues6Teacher: this.state.Tues6Teacher, 
                Tues7Teacher: this.state.Tues7Teacher, 
                Tues8Teacher: this.state.Tues8Teacher, 
                Tues9Teacher: this.state.Tues9Teacher, 
                Wed1Teacher: this.state.Wed1Teacher, 
                Wed2Teacher: this.state.Wed2Teacher, 
                Wed3Teacher: this.state.Wed3Teacher, 
                Wed4Teacher: this.state.Wed4Teacher, 
                Wed5Teacher: this.state.Wed5Teacher, 
                Wed6Teacher: this.state.Wed6Teacher, 
                Wed7Teacher: this.state.Wed7Teacher, 
                Wed8Teacher: this.state.Wed8Teacher, 
                Wed9Teacher: this.state.Wed9Teacher,     
                Thur1Teacher: this.state.Thur1Teacher, 
                Thur2Teacher: this.state.Thur2Teacher, 
                Thur3Teacher: this.state.Thur3Teacher, 
                Thur4Teacher: this.state.Thur4Teacher, 
                Thur5Teacher: this.state.Thur5Teacher, 
                Thur6Teacher: this.state.Thur6Teacher, 
                Thur7Teacher: this.state.Thur7Teacher, 
                Thur8Teacher: this.state.Thur8Teacher, 
                Thur9Teacher: this.state.Thur9Teacher, 
                Fri1Teacher: this.state.Fri1Teacher, 
                Fri2Teacher: this.state.Fri21Teacher, 
                Fri3Teacher: this.state.Fri3Teacher, 
                Fri4Teacher: this.state.Fri4Teacher, 
                Fri5Teacher: this.state.Fri5Teacher, 
                Fri6Teacher: this.state.Fri6Teacher, 
                Fri7Teacher: this.state.Fri7Teacher, 
                Fri8Teacher: this.state.Fri8Teacher, 
                Fri9Teacher: this.state.Fri9Teacher
            })
            .then(res =>
                
                this.setState({ students: res.data, studentName: "", mathLevel: "", readingLevel: "", SPEDteacher: "", Mon1Teacher: "", Mon2Teacher: "", Mon3Teacher: "", Mon4Teacher: "", Mon5Teacher: "", Mon6Teacher: "", Mon7Teacher: "", Mon8Teacher: "", Mon9Teacher: "", Tues1Teacher: "", Tues2Teacher: "", Tues3Teacher: "", Tues4Teacher: "", Tues5Teacher: "", Tues6Teacher: "", Tues7Teacher: "", Tues8Teacher: "", Tues9Teacher: "", Wed1Teacher: "", Wed2Teacher: "", Wed3Teacher: "", Wed4Teacher: "", Wed5Teacher: "", Wed6Teacher: "", Wed7Teacher: "", Wed8Teacher: "", Wed9Teacher: "",     Thur1Teacher: "", Thur2Teacher: "", Thur3Teacher: "", Thur4Teacher: "", Thur5Teacher: "", Thur6Teacher: "", Thur7Teacher: "", Thur8Teacher: "", Thur9Teacher: "", Fri1Teacher: "", Fri2Teacher: "", Fri3Teacher: "", Fri4Teacher: "", Fri5Teacher: "", Fri6Teacher: "", Fri7Teacher: "", Fri8Teacher: "", Fri9Teacher: "" })
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
                <div className="row">
                    <div className="col-md-6 card">
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
                    </div>
                
                    <div className="col-md-6 card">

                        <div className="row">
                            <TeacherList value={this.state.value}
                            handleInputChange={this.handleInputChange}>
                            </TeacherList>
                            <Hours
                            handleInputChange={this.handleInputChange}>
                            </Hours>
                            </div>
                            <ClassDays
                            handleInputChange={this.handleInputChange}>
                            </ClassDays>


                            <FormBtn
                            id="hourSubmit"
                            onClick={this.handleHoursSubmit}
                            >Submit
                            </FormBtn>

                        </div>

                
                </div>

                <div className="wrapper">
                    <NewScheduleTable>
                        
                    </NewScheduleTable>
                </div>

                <div>
                    <FormBtn
                    id="studentSubmit"
                    onClick={this.handleFormSubmit}
                    >Add New Student
                    </FormBtn>
                    {/* <button onClick={this.testRoute}>Test Route</button> */}
                </div>
            </div>
                
        </div>
       )
   } 
}

export default NewStudent;