import React from "react"

function StudentCard() {
    return (
        <div classname="card student-card" id="student-card">
            
            <div className="goals-row row">
                <div className="col-md-8">
                <ol>
                    <li>Goal</li>
                </ol>
                </div>
                <div className="col-md-4">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor="customCheck1"></label>
                    </div>

                    <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                    <label className="custom-control-label" htmlFor="customCheck2"></label>
                    </div>

                    <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                    <label className="custom-control-label" htmlFor="customCheck3"></label>
                </div>

                </div>
                
            </div>

        </div>

    )
}
export default StudentCard;

            