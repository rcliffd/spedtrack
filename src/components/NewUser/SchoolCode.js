import React from "react";

function SchoolCode(props) {
    return (
       
            
            <div>
            <h4>School Code</h4>
                <input className="form-control" type="text" name="schoolCode" onChange={props.handleInputChange}>
                
                </input>
            </div>
        
        
    );
}

export default SchoolCode;