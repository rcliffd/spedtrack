import React from "react";

function TeacherList(props) {
    return (
       
            
            <div className="col-md-6">
            <h4>Teacher</h4>
                                <select className="form-control" name="teacherList" onChange={props.handleInputChange}>
                                {/**put onchagne here */}
                                <option value="">Select Teacher...</option>
                                <option value="Josh Jackson">Josh Jackson</option>
                                <option value="John Geipel">John Geipel</option>
                                <option value="Rich Dutton">Rich Dutton</option>
                                <option value="Ashliegh Lund">Ashliegh Lund</option>
                                <option value="Josh Naylor">Josh Naylor</option>
                                
                                </select>
                            </div>
        
        
    );
}

export default TeacherList;



