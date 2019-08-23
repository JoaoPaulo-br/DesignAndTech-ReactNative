import { SET_COLOR } from '../actions/types';

const initialState = {
  colorValue: '#2F4F4F',
};

const colorReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_COLOR:
      return {
        ...state,
        colorValue: action.payload,
      };
    default:
      return state;
  }
}

export default colorReducer;