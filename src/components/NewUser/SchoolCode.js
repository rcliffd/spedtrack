import React from "react";

function SchoolCode(props) {
    return (
       
            
            <div>
            <h4>School Code</h4>
                <select className="form-control" name="schoolCode" onChange={props.handleInputChange}>
                
                <option value="1">Placeholder</option>
                <option value="2">Placeholder</option>
                <option value="3">Placeholder</option>
                <option value="4">Placeholder</option>
                <option value="5">Placeholder</option>
                <option value="6">Placeholder</option>
                
                
                </select>
            </div>
        
        
    );
}

export default SchoolCode;