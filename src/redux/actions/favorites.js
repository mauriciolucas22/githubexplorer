import api from 'services/api';

function addFavorite(repository) {
  return {
    type: 'ADD_FAVORITE',
    playload: {
      repository,
    },
  };
}

export function searchAndAddRepository(repositoryName) {
  return async (dispatch) => {
    const response = await api.get(`/repos/${repositoryName}`);

    dispatch(addFavorite(response.data));
  }
}