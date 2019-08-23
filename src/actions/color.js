import { SET_COLOR } from './types';

export const setColor = colorValue => {
  return {
    type: SET_COLOR,
    payload: colorValue
  }
}