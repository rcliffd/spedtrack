import React from "react";

function SchoolCode(props) {
    return (
       
            
            <div>
            <h4>School Code</h4>


                <input className="form-control" name="schoolCode" type="text" onChange={props.handleInputChange}></input>

            </div>
        
        
    );
}

export default SchoolCode;