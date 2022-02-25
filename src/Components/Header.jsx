import React from "react";

var styles = {
  margin: "0",
  padding: "10px",
  color: "red",
  backgroundColor: "rgb(192,192,192)"
};

function header() {
  return (
    <div>
      <h2 style={styles}>Apartement tracker</h2>
    </div>
  );
}

export default header;
