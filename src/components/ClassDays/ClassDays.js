import React from "react";

function ClassDays() {
    return (
        <div className="wrapper week-wrapper">
            <h4>Class Days</h4>
            
            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
            <label className="custom-control-label" for="customCheck1">Monday</label>
            </div>

            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
            <label className="custom-control-label" for="customCheck2">Tuesday</label>
            </div>

            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck3"/>
            <label className="custom-control-label" for="customCheck3">Wednesday</label>
            </div>

            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
            <label className="custom-control-label" for="customCheck4">Thursday</label>
            </div>

            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck5"/>
            <label className="custom-control-label" for="customCheck5">Friday</label>
            </div>

        </div>
            

            
        
    );
}

export default ClassDays;