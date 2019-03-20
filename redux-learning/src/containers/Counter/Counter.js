import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionTypes from '../../store/actions/actions';
// import * as actionCreators from '../../store/actions/actionsTypes';
import * as actionCreators from '../../store/actions/index';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                {/* <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  /> */}
                {/* <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  /> */}
                {/* <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(strResult => (
                    <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                  ))}                 
                </ul>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    // onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    // onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    // onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
    // onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
    // onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
    // onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})

    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(10)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);