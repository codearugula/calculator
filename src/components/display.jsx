import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <>
        <div
          id="wholeCalc"
          style={{ minHeight: 30, textAlign: "right", fontSize: 20 }}
        ></div>
        <div
          id="display"
          className="mt-2 container border border-black"
          style={{
            minHeight: 35,
            display: "grid",
            gridTemplateRows: "100%",
            textAlign: "right",
          }}
        >
          <div
            id="currentInput"
            style={{ width: "200", fontSize: "50px", textAlign: "right" }}
          >
            0
          </div>
        </div>
      </>
    );
  }
}

export default Display;
