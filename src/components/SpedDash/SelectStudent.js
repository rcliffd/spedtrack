import React from "react";


export function StudentOption(props) {

    return (
        <option className="studentOption" value={props.value}>{props.name}</option>
    )

};

export function StudentSelect(props) {
    return (
<<<<<<< HEAD
        <div>
        <h4>Select Student</h4>
        <select className="form-control">{children}</select>
        </div>
=======
        <select className="studentSelect" onChange={props.getStudentById}>{props.children}</select>
>>>>>>> 37b0469c76f5dfdf660b0482f01f7209ece61638
    )
}
