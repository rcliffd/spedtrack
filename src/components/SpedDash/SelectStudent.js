import React from "react";


export function StudentOption(props) {

    return (
        <option className="studentOption" value={props.value}>{props.name}</option>
    )

};

export function StudentSelect(props) {
    return (
        <select className="studentSelect" onChange={props.getStudentById}>{props.children}</select>
    )
}
