const Api = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          name: character.name,
          image: character.image,
          id: character.id,
          species: character.species,
          planet: character.origin.name,
          status: character.status,
          episodes: character.episode,
        };
      });

      return cleanData.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    });
};

export default Api;
