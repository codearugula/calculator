import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Display from "./components/display";
import KeyPad from "./components/keypad";
import ReactFCCtest from "react-fcctest";

class App extends Component {
  state = {};

  clearViews = () => {
    document.getElementById("currentInput").innerHTML = 0;
    document.getElementById("wholeCalc").innerHTML = "";
  };

  handleInput = (id) => {
    if (/[0]/.test(id)) {
      // if the currentInput innerHTML is exactly 0, return
      if (/^0$/.test(document.getElementById("currentInput").innerHTML)) {
        return console.log("there is just a zero");
      }
      // if the currentInput innerHTML is 1-9, return put this number next
      if (/\d/.test(document.getElementById("currentInput").innerHTML)) {
        document.getElementById("currentInput").innerHTML += id;
        return (document.getElementById("wholeCalc").innerHTML += id);
      }
      // if the currentInput innerHTML is /[*/\-+]/, return set innerHTML = 0
      if (/[*/\-+]/.test(document.getElementById("currentInput").innerHTML)) {
        document.getElementById("wholeCalc").innerHTML += id;
        return (document.getElementById("currentInput").innerHTML = id);
      }
    }
    if (/[1-9]/.test(id)) {
      if (/^0$/.test(document.getElementById("currentInput").innerHTML)) {
        document.getElementById("wholeCalc").innerHTML += id;
        return (document.getElementById("currentInput").innerHTML = id);
      }
      if (/[*/\-+]/.test(document.getElementById("currentInput").innerHTML)) {
        document.getElementById("wholeCalc").innerHTML += id;
        return (document.getElementById("currentInput").innerHTML = id);
      }
      document.getElementById("currentInput").innerHTML += id;
      return (document.getElementById("wholeCalc").innerHTML += id);
    }
    if (/[*/\-+]/.test(id)) {
      // if the previous input was also an operator, replace the operator in wholeCalc
      if (/[*/\-+]/.test(document.getElementById("currentInput").innerHTML)) {
        document.getElementById("wholeCalc").innerHTML = document
          .getElementById("wholeCalc")
          .innerHTML.slice(0, -1);
      }
      document.getElementById("currentInput").innerHTML = id;
      return (document.getElementById("wholeCalc").innerHTML += id);
    }
  };

  handleEqual = () => {
    document.getElementById("currentInput").innerHTML = eval(
      document.getElementById("wholeCalc").innerHTML
    );
    return (document.getElementById("wholeCalc").innerHTML +=
      "=" + eval(document.getElementById("wholeCalc").innerHTML));
  };

  render() {
    return (
      <div
        className="mt-5 container border border-primary"
        style={{ maxWidth: 500 }}
      >
        <ReactFCCtest />
        <Display />
        <KeyPad
          clearViews={this.clearViews}
          handleInput={this.handleInput}
          handleEqual={this.handleEqual}
        />
      </div>
    );
  }
}

export default App;
