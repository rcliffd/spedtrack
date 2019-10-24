import React from "react";

function NewUserState(props) {
    return (
       
            
        <div>
            <h4>Select State</h4>
                <select className="form-control" name="selectState" onChange={props.handleStateClicked}>
                        
                </select>		
        </div>

        
    );
}

export default NewUserState;