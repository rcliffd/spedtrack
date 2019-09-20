import React from "react";

function Hours(props) {
    return (
       
            
            <div className="col-md-6">
            <h4>Hours/Block</h4>
                                <select className="form-control" name="hours" onChange={props.handleInputChange}>
                                {/**put onchagne here */}
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                
                                </select>
                            </div>
        
        
    );
}

export default Hours;