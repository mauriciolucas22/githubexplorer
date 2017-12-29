import { ADD } from '../types/favorites';

export default function favorites(state = [], action) {
  switch (action.type) {
    case ADD:
      return [ ...state, action.playload.repository ];
    default:
      return state;
  }
}