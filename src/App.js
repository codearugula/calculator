import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react";
import Display from "./components/display";
import KeyPad from "./components/keypad";

function App() {
  useEffect(() => {
    const onKeyPress = (e) => {
      if (e.key === "Delete") {
        clearViews();
      }
      e.key === "Enter" ? handleEqual() : handleInput(e.key);
    };

    document.addEventListener("keydown", onKeyPress);

    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, []);

  const clearViews = () => {
    document.getElementById("currentInput").innerHTML = 0;
    document.getElementById("wholeCalc").innerHTML = "";
  };

  const handleInput = (id) => {
    // if wholeCalc includes an "="
    if (document.getElementById("wholeCalc").innerHTML.includes("=")) {
      // if input is a number, clear the wholeCalc
      if (/[0-9]/.test(id)) {
        document.getElementById("wholeCalc").innerHTML = "";
        document.getElementById("currentInput").innerHTML = "";
      }
      // else, make wholeCalc equal to just the result
      else {
        document.getElementById("wholeCalc").innerHTML =
          document.getElementById("currentInput").innerHTML;
      }
    }
    if (/[0]/.test(id)) {
      // if the currentInput innerHTML is exactly 0, return
      if (/^0$/.test(document.getElementById("currentInput").innerHTML)) {
        return;
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
    if (/[*/+]/.test(id)) {
      // if the previous input was also an operator, replace the operator in wholeCalc
      if (
        /[*/+-][*/+-]$/.test(document.getElementById("wholeCalc").innerHTML)
      ) {
        document.getElementById("wholeCalc").innerHTML = document
          .getElementById("wholeCalc")
          .innerHTML.slice(0, -1);
      }
      if (/[*/+-]/.test(document.getElementById("currentInput").innerHTML)) {
        document.getElementById("wholeCalc").innerHTML = document
          .getElementById("wholeCalc")
          .innerHTML.slice(0, -1);
      }

      document.getElementById("currentInput").innerHTML = id;
      return (document.getElementById("wholeCalc").innerHTML += id);
    }

    //tests for '-'
    //if the input is a '-'
    if (/[-]/.test(id)) {
      //if the last two symbols in the "wholeCalc" match /[*/\-+][-]$/, return
      if (
        /[*/\-+][*/\-+]$/.test(document.getElementById("wholeCalc").innerHTML)
      ) {
        return;
      }
      //will need to edit above for this also
      //change the currentInput to id
      document.getElementById("currentInput").innerHTML = id;
      //return change the wholeCalc += id
      return (document.getElementById("wholeCalc").innerHTML += id);
      //need to add a test to switch -- to + before eval on handleEqual
    }

    if (/[.]/.test(id)) {
      // check to see if there is already a decimal in wholeCalc
      if (/[.]/.test(document.getElementById("currentInput").innerHTML)) {
        return;
      }
      // if there is, return
      // if there is not, add a decimal to currentInput and wholeCalc
      else {
        document.getElementById("currentInput").innerHTML += id;
        return (document.getElementById("wholeCalc").innerHTML += id);
      }
    }
  };

  const handleEqual = () => {
    // if there are two - in a row in the wholeCalc, replace them with a +

    const result = document
      .getElementById("wholeCalc")
      .innerHTML.replace(/--/, "+");
    document.getElementById("wholeCalc").innerHTML = result;

    // eslint-disable-next-line no-eval
    try {
      Number(eval(result).toPrecision(10).toString());
    } catch {
      return document.getElementById("currentInput").innerHTML;
    }
    const myEval = Number(eval(result).toPrecision(10).toString());
    document.getElementById("currentInput").innerHTML = myEval;
    document.getElementById("wholeCalc").innerHTML += "=" + myEval;
    return;
  };

  return (
    <div
      className="mt-5 container border border-primary border-5 rounded bg-dark"
      style={{ maxWidth: 500 }}
    >
      <Display handleInput={handleInput} />
      <KeyPad
        clearViews={clearViews}
        handleInput={handleInput}
        handleEqual={handleEqual}
      />
    </div>
  );
}

export default App;
