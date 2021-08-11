import {combineReducers} from 'redux';
import CounterReducer from './CounterReducer';
import helloReducer from './helloReducer';

// const reducer = combineReducers({
//   CounterReducer,
//   helloReducer,
// });

// export default reducer;

export default combineReducers({
  counter: CounterReducer,
  hello: helloReducer,
});
