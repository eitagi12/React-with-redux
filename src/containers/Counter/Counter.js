import React, { Component } from "react";
//// เชื่อม React กับ Redux ////
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

//// ใช้ในการดึง State ไปใช้ (this.props.) ////
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

//// ใช้ในการเอาไปทำฟังก์ชั่นใน reducer โดยการเรียกผ่านไฟล์ actions.js โดยใช้ type ในการเรียก ////
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    ////สามารถส่ง value ไปได้ด้วย ////
    onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 10 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 15 }),
    onStoreResult: result =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: id =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })
  };
};

//// ต้องเรียงลำดับในการใช้ connect ตามนี้ถ้าไม่มี mapStateToProps ให้เขียนแบบนี้ connect(null, mapDispatchToProps)(Counter); ////
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
