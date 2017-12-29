// Action Types

export const Types = {
  ADD: 'favorites/ADD',
  SEARCH: 'favorites/SEARCH',
  REMOVE: 'favorites/REMOVE',
}

// Reducer

const initialState = [];

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return [ ...state, action.playload.repository ];
    case Types.REMOVE:
      return state.filter(repository => repository.id !== action.playload.id)
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

export function removeFavorite(id) {
  return {
    type: Types.REMOVE,
    playload: {
      id,
    },
  };
}