import React from "react";

function Hours(props) {
    return (
       
            
            <div className="col-md-6">
            <h4>Hours/Block</h4>
                                <select className="form-control" name="hours" onChange={props.handleInputChange}>
                                {/**put onchagne here */}
                                <option value="1">placeholder</option>
                                <option value="2">placeholder</option>
                                <option value="3">placeholder</option>
                                <option value="4">placeholder</option>
                                <option value="5">placeholder</option>
                                
                                </select>
                            </div>
        
        
    );
}

export default Hours;