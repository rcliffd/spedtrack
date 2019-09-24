import React from "react";

export function StudentOption({ children }) {

    return (
        <option className="studentOption">{children}</option>
    )

};

export function StudentSelect({ children }) {
    return (
        <select className="studentSelect">{children}</select>
    )
}
