import React from "react";

function FormBtn(props) {
    return (
        <button {...props} className="btn btn-outline-secondary">
            {props.children}
        </button>
    );
}

export default FormBtn
