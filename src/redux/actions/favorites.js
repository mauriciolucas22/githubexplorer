export function addFavorite(repositoryName) {
  return {
    type: 'SEARCH_REPOSITORY',
    playload: {
      repositoryName,
    },
  };
}
