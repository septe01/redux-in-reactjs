import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

//Import Action
import { actionINC } from "./_actions/incrementA";
import { actionDEC } from "./_actions/decrementA";
import { actionMLT } from "./_actions/multiplicationA";
import { actionDIV } from "./_actions/divisionA";
import { actionRES } from "./_actions/resetA";

class App extends Component {
  render() {
    return (
      <div className="App-header  ">
        <h1>COUNTER</h1>
        <button
          style={{ float: "right", marginBottom: "20px" }}
          onClick={() => this.props.dispatch(actionRES())}
        >
          Reset
        </button>
        <table
          style={{
            width: "80%",
            marginBottom: "10px"
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Inc</th>
              <th style={{ textAlign: "left" }}>Dec</th>
              <th style={{ textAlign: "left" }}>Mult</th>
              <th style={{ textAlign: "left" }}>Div</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th style={{ textAlign: "left" }}>... * 2</th>
              <th style={{ textAlign: "left" }}>... / 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.incrementR.number}</td>
              <td>{this.props.decrementR.number}</td>
              <td>{this.props.multiplicationR.number}</td>
              <td>{this.props.devisionR.number}</td>
            </tr>
            <tr>
              <td>
                <button onClick={() => this.props.dispatch(actionINC())}>
                  INC
                </button>
              </td>
              <td>
                <button onClick={() => this.props.dispatch(actionDEC())}>
                  DEC
                </button>
              </td>
              <td>
                <button onClick={() => this.props.dispatch(actionMLT())}>
                  Mlt
                </button>
              </td>
              <td>
                <button onClick={() => this.props.dispatch(actionDIV())}>
                  Div
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    incrementR: state.incrementR,
    decrementR: state.decrementR,
    multiplicationR: state.multiplicationR,
    devisionR: state.devisionR,
    resetR: state.resetR
  };
};

export default connect(mapStateToProp)(App);
