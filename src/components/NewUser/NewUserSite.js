import React from "react";

function NewUserSite(props) {
    return (
       
            
            <div>
            <h4>Select Site</h4>
                <select className="form-control" name="site" onChange={props.handleInputChange}>
                
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

export default NewUserSite;