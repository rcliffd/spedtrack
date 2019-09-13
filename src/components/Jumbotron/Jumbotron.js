import React from "react";

function Jumbotron(props) {
  const { heading } = props;
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 60, textAlign: "center" }}
      className="jumbotron"
    >
      {heading}
    </div>
  );
}

export default Jumbotron;