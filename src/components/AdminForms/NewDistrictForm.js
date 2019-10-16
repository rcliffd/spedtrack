import React from "react";

function NewDistrictForm() {
    return (
        <div className="container adminForm">
            <h4 className="adminFormTitle">Add New District to Database</h4>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Type District Name</span>
                </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1" className="adminFormSubTitle">Select District's State</label>
                <h6>Note: Only previously registered states are available to select</h6>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
            </div>
            <br></br>
            <button>Submit New District</button>
        </div>
    )
}

export default NewDistrictForm;