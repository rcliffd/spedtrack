import React from "react";

export function StudentOption({ children }) {

    return (
        <option className="studentOption">{children}</option>
    )

};

export function StudentSelect({ children }) {
    return (
        <div>
        <h4>Select Student</h4>
        <select className="form-control">{children}</select>
        </div>
    )
}
