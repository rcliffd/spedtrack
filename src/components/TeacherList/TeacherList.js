import React from "react";

function TeacherList(props) {
    return (
       
            
            <div className="col-md-6">
            <h5>Teacher</h5>
                                <select className="form-control" name="teacherList" onChange={props.handleInputChange}>
                                {/**put onchagne here */}
                                <option value="1">teacher 1</option>
                                <option value="2">teacher 2</option>
                                <option value="3">teacher 3</option>
                                <option value="4">teacher 4</option>
                                <option value="5">teacher 5</option>
                                
                                </select>
                            </div>
        
        
    );
}

export default TeacherList;