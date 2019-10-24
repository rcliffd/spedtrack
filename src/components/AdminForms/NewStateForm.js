import React from "react";

function NewStateForm() {
    return (
        <div className="container adminForm">
            <h4 className="adminFormTitle">Add New State to Database</h4>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Type State Name</span>
                </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <button>Submit New State</button>
        </div>
    )
}

export default NewStateForm;