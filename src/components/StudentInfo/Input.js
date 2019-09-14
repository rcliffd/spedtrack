import React from "react";

 function Input (props) {
    const {handleInputChange, ...restofprops}=props
    return (
        <div className="form-group">
            <input className="form-control"
                type="text"{...restofprops} onChange={handleInputChange} />
        </div>
    );
}


export default Input