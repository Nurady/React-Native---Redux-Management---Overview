import {PRESSED_BUTTON} from '../actions/types';

const initialState = {
  helloText: 'hello!',
  loading: false,
  pressedButton: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRESSED_BUTTON:
      return {
        ...state,
        pressedButton: true,
        helloText: 'You Pressed the button, wow!',
        loading: true,
      };
    default:
      return state;
  }
};
