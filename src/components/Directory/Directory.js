import React from "react";

function Directory() {
    return (
        <div className="container menu">
            <div className="directory">
            <a href="/RegED" className="btn btn-outline-secondary" role="button" aria-pressed="true">Reg Ed</a>

            <a href="/SPED" className="btn btn-outline-secondary" role="button" aria-pressed="true">SPED</a>

            <a href="/NewUser" className="btn btn-outline-secondary" role="button" aria-pressed="true">New User</a>
        </div>
        </div>
    )
}

export default Directory;