import React from "react";

export default function Display() {
  return (
    <>
      <div
        id="wholeCalc"
        style={{
          overflow: "hidden",
          minHeight: 30,
          textAlign: "right",
          fontSize: 20,
          color: "yellow",
          marginTop: "10px",
        }}
      ></div>
      <div
        id="display"
        className="mt-2 container border border-black rounded border-5 bg-white"
        style={{
          overflow: "hidden",
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
