import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";
class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {};

  render() {
    console.log(this.props);
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 8" clicked={this.props.onSubCounter} />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Save result
        </button>
        <ul>
          {this.props.storedResults.map((result) => {
            return (
              <li
                key={result.id}
                onClick={() => this.props.onDeleteResult(result.id)}
              >
                {result.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    storedResults: state.result.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => {
      dispatch({ type: actionTypes.INCREMENT });
    },
    onDecrementCounter: () => {
      dispatch({ type: actionTypes.DECREMENT });
    },
    onAddCounter: () => {
      dispatch({ type: actionTypes.ADD, value: 10 });
    },
    onSubCounter: () => {
      dispatch({ type: actionTypes.SUB, value: 8 });
    },
    onStoreResult: (result) => {
      dispatch({ type: actionTypes.STORE_RESULT, result });
    },
    onDeleteResult: (id) => {
      dispatch({ type: actionTypes.DELETE_RESULT, id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
