import React from "react";

function NewStaffForm() {
    return (
        <div className="container adminForm">
            <h4 className="adminFormTitle">Add New Staff Member to Database</h4>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Type Staff Member's Name (First, Last)</span>
                </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1" className="adminFormSubTitle">Select Staff's State</label>
                <h6>Note: Only previously registered states are available to select</h6>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1" className="adminFormSubTitle">Select Staff's District</label>
                <h6>Note: Only previously registered districts are available to select</h6>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1" className="adminFormSubTitle">Select Staff's School</label>
                <h6>Note: Only previously registered schools are available to select</h6>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                <label class="form-check-label" for="defaultCheck1">Check if special education teacher</label>
            </div>
            <br></br>
            <button>Submit New School</button>
        </div>
    )
}

export default NewStaffForm;