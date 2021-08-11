import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Home from './src/Home';
import reducers from './src/reducers';
// import CounterReducer from './src/reducers/CounterReducer';

// const store = createStore(CounterReducer);
const store = createStore(reducers);
const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;

// import {StyleSheet} from 'react-native';
// const styles = StyleSheet.create({});
