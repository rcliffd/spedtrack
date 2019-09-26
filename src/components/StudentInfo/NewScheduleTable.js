import React from "react";




function NewScheduleTable() {
    
        
    return (
        <div className="row">
            <div className="card col-md-12">
        
        
            
                
                   
                    {/* <div class="card-header">Student</div> */}
                    
                    <div className="card-body">
                        <table className="table table-sm table-hover" id="schedule-table">
                            <thead>
                                <tr className="tr-head">
                                    <th scope="col">Teacher Name</th>
                                    
                                    <th scope="col">Hours / Block</th>
                                    <th scope="col">Days</th>  
                                </tr>

                               
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                
            </div>
        </div>

    )
}

export default NewScheduleTable;