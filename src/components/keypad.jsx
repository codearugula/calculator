import React, { Component } from "react";

class KeyPad extends Component {
  render() {
    return (
      <div
        id="keypad"
        className="container border mr-2 mt-2 mb-2"
        style={{
          display: "grid",
          gridTemplateRows: "70px 70px 70px 70px 70px",
          gridTemplateColumns: "25% 25% 25% 25%",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => this.props.clearViews()}
          id="clear"
          className="m-1 btn btn-danger"
          style={{ gridArea: "1/1/2/3" }}
        >
          AC
        </button>
        <button
          id="divide"
          className="m-1 btn-outline-dark btn btn-primary"
          onClick={() =>
            this.props.handleInput(document.getElementById("divide").innerHTML)
          }
        >
          /
        </button>
        <button
          id="multiply"
          className="m-1 btn-outline-dark btn btn-primary"
          onClick={() =>
            this.props.handleInput(
              document.getElementById("multiply").innerHTML
            )
          }
        >
          *
        </button>
        <button
          id="seven"
          className="btn btn-secondary m-1 btn-outline-warning"
          onClick={() =>
            this.props.handleInput(document.getElementById("seven").innerHTML)
          }
        >
          7
        </button>
        <button
          id="eight"
          className="btn btn-secondary m-1 btn-outline-warning"
          onClick={() =>
            this.props.handleInput(document.getElementById("eight").innerHTML)
          }
        >
          8
        </button>
        <button
          id="nine"
          className="btn btn-secondary m-1 btn-outline-warning"
          onClick={() =>
            this.props.handleInput(document.getElementById("nine").innerHTML)
          }
        >
          9
        </button>
        <button
          id="subtract"
          className="m-1 btn-outline-dark btn btn-primary"
          onClick={() =>
            this.props.handleInput(
              document.getElementById("subtract").innerHTML
            )
          }
        >
          -
        </button>
        <button
          id="four"
          className="btn btn-secondary m-1 btn-outline-warning"
          onClick={() =>
            this.props.handleInput(document.getElementById("four").innerHTML)
          }
        >
          4
        </button>
        <button
          id="five"
          className="btn btn-secondary m-1 btn-outline-warning"
          onClick={() =>
            this.props.handleInput(document.getElementById("five").innerHTML)
          }
        >
          5
        </button>
        <button
          id="six"
          className="btn btn-secondary m-1 btn-outline-warning"
          onClick={() =>
            this.props.handleInput(document.getElementById("six").innerHTML)
          }
        >
          6
        </button>
        <button
          id="add"
          className="m-1 btn-outline-dark btn btn-primary"
          onClick={() =>
            this.props.handleInput(document.getElementById("add").innerHTML)
          }
        >
          +
        </button>
        <button
          id="one"
          className="btn btn-secondary m-1 btn-outline-warning"
          onClick={() =>
            this.props.handleInput(document.getElementById("one").innerHTML)
          }
        >
          1
        </button>
        <button
          id="two"
          className="btn btn-secondary m-1 btn-outline-warning"
          onClick={() =>
            this.props.handleInput(document.getElementById("two").innerHTML)
          }
        >
          2
        </button>
        <button
          id="three"
          className="btn btn-secondary m-1 btn-outline-warning"
          onClick={() =>
            this.props.handleInput(document.getElementById("three").innerHTML)
          }
        >
          3
        </button>
        <button
          id="equals"
          className="btn btn-warning m-1 btn-outline-dark"
          style={{
            gridArea: "4/4/6/5",
          }}
          onClick={() => this.props.handleEqual()}
        >
          =
        </button>
        <button
          id="zero"
          className="btn btn-secondary m-1 btn-outline-warning"
          style={{ gridArea: "5/1/6/3" }}
          onClick={() =>
            this.props.handleInput(document.getElementById("zero").innerHTML)
          }
        >
          0
        </button>
        <button
          id="decimal"
          className="m-1 btn-outline-dark btn btn-primary"
          onClick={() =>
            this.props.handleInput(document.getElementById("decimal").innerHTML)
          }
        >
          .
        </button>
      </div>
    );
  }
}

export default KeyPad;
