import React from "react"
import StudentCard from "./StudentCard"


function BlockCard() {
    return (
        <div className="container">
           <div className="accordion" id="accordionExample">
            <div className="card block-card">
                <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Block One
                    </button>
                </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    <StudentCard></StudentCard>
                    

                {/* <div classname="card student-card">
                    <h5>Student Name</h5>
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

        </div> */}
                    
                </div>
                </div>
            </div>

            <div className="card block-card">
                <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Block Two
                    </button>
                </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                    
                </div>
                </div>
            </div>

            <div className="card block-card">
                <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Block Three
                    </button>
                </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                    
                </div>
                </div>
            </div>
{/* Collapse Block Code Start ****************** */}
            <div className="card block-card">
                <div className="card-header" id="headingFour">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Block Four
                    </button>
                </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                <div className="card-body">
                    
                </div>
                </div>
            </div>
{/* Collapse Block Code Finish ****************** */}

{/* Collapse Block Code Start ****************** */}
            <div className="card block-card">
                <div className="card-header" id="headingFive">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Block Five
                    </button>
                </h2>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                <div className="card-body">
                    
                </div>
                </div>
            </div>
{/* Collapse Block Code Finish ****************** */}

{/* Collapse Block Code Start ****************** */}
            <div className="card block-card">
                <div className="card-header" id="headingSix">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Block Six
                    </button>
                </h2>
                </div>
                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                <div className="card-body">
                    
                </div>
                </div>
            </div>
{/* Collapse Block Code Finish ****************** */}

{/* Collapse Block Code Start ****************** */}
            <div className="card block-card">
                <div className="card-header" id="headingSeven">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Block Seven
                    </button>
                </h2>
                </div>
                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                <div className="card-body">
                    
                </div>
                </div>
            </div>
{/* Collapse Block Code Finish ****************** */}

{/* Collapse Block Code Start ****************** */}
            <div className="card block-card">
                <div className="card-header" id="headingEight">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    Block Eight
                    </button>
                </h2>
                </div>
                <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                <div className="card-body">
                    
                </div>
                </div>
            </div>
{/* Collapse Block Code Finish ****************** */}


{/* Collapse Block Code Start ****************** */}
            <div className="card block-card">
                <div className="card-header" id="headingNine">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    Block Nine
                    </button>
                </h2>
                </div>
                <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                <div className="card-body">
                    
                </div>
                </div>
            </div>
{/* Collapse Block Code Finish ****************** */}

            </div>
        </div>


    )
}

export default BlockCard;