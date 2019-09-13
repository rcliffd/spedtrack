import React from "react";

function StudentInfo() {
    return (
        <div className="container student-info">
            <form>
                <div className="form-group">
                    <label for="studentName"><h4>Student Name</h4></label>
                    <input type="text" className="form-control" id="inputName" placeholder="First and Last Name"></input>

                    <div classname="levels-input container">
                        <h4>Levels Last Recorded</h4>
                        <div classname="row">
                            <div className="col-md-6">
                                <h5>Math</h5>
                                <select class="form-control">Levels Last Recorded
                                <option>Not Applicable</option>
                                <option>Well Below</option>
                                <option>Below</option>
                                <option>On Target</option>
                                <option>Above Target</option>
                                <option>Well Above</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <h5>Reading</h5>
                                <select class="form-control">Levels Last Recorded
                                <option>Not Applicable</option>
                                <option>Well Below</option>
                                <option>Below</option>
                                <option>On Target</option>
                                <option>Above Target</option>
                                <option>Well Above</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button type="submit" className="btn btn-outline-secondary">Add Student</button>
            </form>
        </div>
    )
}

export default StudentInfo;

//Bullshit comment for stupid git issue