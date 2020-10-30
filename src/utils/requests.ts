export const getPokemon = async (pokemon: string) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  };

//   export const request = async ({endpoint = 's', query, type, year, page} : RequestParams) => {
//     const searchParams = buildSearchParams({endpoint, query, type, year, page});
  
//     return await fetch(`${API_PATH}?${searchParams}`);
//   };