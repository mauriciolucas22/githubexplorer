// Action Types

export const Types = {
  ADD: 'favorites/ADD',
  SEARCH: 'favorites/SEARCH',
}

// Reducer

const initialState = [];

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return [ ...state, action.playload.repository ];
    default:
      return state;
  }
}

// Action Creators

export function addFavorite(repositoryName) {
  return {
    type: Types.SEARCH,
    playload: {
      repositoryName,
    },
  };
}