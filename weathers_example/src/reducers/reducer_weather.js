import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data].concat(state);
      // another, more modern sytax for the same as above:
      //return [action.payload.data, ...state ] 
  }
  return state;
}