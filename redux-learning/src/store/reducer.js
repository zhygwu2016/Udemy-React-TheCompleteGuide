// reducer.js : state里counter和reducer没有分家之前的原始文件

import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
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
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)

      const updatedArray = state.results.filter(result => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray
      }
  }

  return state;
};

export default reducer;