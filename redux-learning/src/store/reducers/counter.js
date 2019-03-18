import * as actionTypes from '../actions';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'INCREMENT':
    case actionTypes.INCREMENT:
      // return {
      //   counter: state.counter + 1 
      //   // 直接这么做，state就只有counter， 没有results或者其他了
      // }
      const newState = Object.assign({}, state); //copy出一个新state，不改变老state
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT: 
      //与上面同样的，但是更简洁的方法
      // this is how we should update states immutably
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      }
  }

  return state;
};

export default reducer;