import React from "react";

function StudentInfo(props) {
    return (
        <div className="student-info container">
            <form>
                <div className="form-group">
                    <label htmlFor="studentName"><h4>Student Name</h4></label>
                    {/* <input type="text" className="form-control" id="inputName" placeholder="First and Last Name"></input> */}

                    {/* <div classname="levels-input container">
                        <h4>Levels Last Recorded</h4>
                        <div classname="row">
                            <div className="col-md-6">
                                <h5>Math</h5>
                                <select className="form-control">Levels Last Recorded
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
                                <select classname="form-control">Levels Last Recorded
                                <option>Not Applicable</option>
                                <option>Well Below</option>
                                <option>Below</option>
                                <option>On Target</option>
                                <option>Above Target</option>
                                <option>Well Above</option>
                                </select>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </form>
        </div>
    )
}

export default StudentInfo;

//Bullshit comment for stupid git issue