import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  // console.log(props);
  return (
    <>
      <h1>Saya Mesin Penghitung</h1>
      <p>count: {props.count}</p>
      <button>Increment</button>
    </>
  );
}

function mapStatetoProps(state) {
  // console.log("mapStatetoProps:", state);
  return { count: state.count };
}

export default connect(mapStatetoProps)(Counter);
