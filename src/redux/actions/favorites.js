import { SEARCH } from '../types/favorites';

/**
 * Action Types = 'SEARCH_REPOSITORY'
 * Action Creators = addFavorite
 * Actions = {
    type: 'SEARCH_REPOSITORY',
    playload: {
      repositoryName,
    },
  }
 */

export function addFavorite(repositoryName) {
  return {
    type: SEARCH,
    playload: {
      repositoryName,
    },
  };
}
