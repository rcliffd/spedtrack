import React from "react";

function ClassDays(props) {
    return (
        <div>
        {/* // <div className="col-md-6"> */}
            <h4>Class Days</h4>
            
            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={props.handleInputChange} value="Mon"/>
            <label className="custom-control-label" htmlFor="customCheck1">Monday</label>
            </div>

            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={props.handleInputChange} value="Tues"/>
            <label className="custom-control-label" htmlFor="customCheck2">Tuesday</label>
            </div>

            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck3" onChange={props.handleInputChange} value="Wed"/>
            <label className="custom-control-label" htmlFor="customCheck3">Wednesday</label>
            </div>

            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck4" onChange={props.handleInputChange} value="Thur"/>
            <label className="custom-control-label" htmlFor="customCheck4">Thursday</label>
            </div>

            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck5" onChange={props.handleInputChange} value="Fri"/>
            <label className="custom-control-label" htmlFor="customCheck5">Friday</label>
            </div>

            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck6" onChange={props.handleInputChange} value="Week"/>
            <label className="custom-control-label" htmlFor="customCheck6">All Week</label>
            </div>

        {/* // </div> */}
            </div>

            
        
    );
}

export default ClassDays;