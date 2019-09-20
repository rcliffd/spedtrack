import React from "react";

function FormOptions(props) {
 

    return(
                    <div className="levels-input container">
                        <h4>Levels Last Recorded</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <h6>Math</h6>
                                <select className="form-control" name="mathLevel" onChange={props.handleInputChange}>Levels Last Recorded
                                {/**put onchagne here */}
                                <option value="Not Applicable">Not Applicable</option>
                                <option value="Well Below">Well Below</option>
                                <option value="Below">Below</option>
                                <option value="On Target">On Target</option>
                                <option value="Above Target">Above Target</option>
                                <option value="Well Above">Well Above</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <h6>Reading</h6>
                                <select className="form-control" name="readingLevel" onChange={props.handleInputChange}>Levels Last Recorded
                                <option value="Not Appliable">Not Applicable</option>
                                <option value="Well Below">Well Below</option>
                                <option value="Below">Below</option>
                                <option value= "On Target">On Target</option>
                                <option value="Above Target">Above Target</option>
                                <option value="Well Above">Well Above</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
    )
}

export default FormOptions