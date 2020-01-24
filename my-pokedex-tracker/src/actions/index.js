import axios from 'axios';

export const FETCHING_POKEMON_START = 'FETCHING_POKEMON_START'
export const FETCHING_POKEMON_SUCCESS = 'FETCHING_POKEMON_SUCCESS'
export const FETCHING_POKEMON_FAILURE = 'FETCHING_POKEMON_FAILURE'

export const fetchNextPokemonByNumber = pokeIndex => {
    let number = pokeIndex + 1
    
    return dispatch => {
    
    dispatch({ type: FETCHING_POKEMON_START});
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then(response => {
        console.log('Call Response', response)
        dispatch({ type: FETCHING_POKEMON_SUCCESS, payload: response.data})
      })
      .catch(error => 
        { console.log(error);
          dispatch(
            { type: FETCHING_POKEMON_FAILURE, payload: error.response}
          );
        }
      );
  };
};

export const fetchPrevPokemonByNumber = pokeIndex => {
    let number = 0
    
    if (pokeIndex === 0) {
      number = 1
    } else {
      number = pokeIndex - 1
    }

    return dispatch => {
    
    dispatch({ type: FETCHING_POKEMON_START});
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then(response => {
        console.log('Call Response', response)
        dispatch({ type: FETCHING_POKEMON_SUCCESS, payload: response.data})
      })
      .catch(error => 
        { console.log(error);
          dispatch(
            { type: FETCHING_POKEMON_FAILURE, payload: error.response}
          );
        }
      );
  };
};

export const fetchPokemonByName = name => {

    return dispatch => {
    
    dispatch({ type: FETCHING_POKEMON_START});
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        console.log('Call Response', response)
        dispatch({ type: FETCHING_POKEMON_SUCCESS, payload: response.data})
      })
      .catch(error => 
        { console.log(error);
          dispatch(
            { type: FETCHING_POKEMON_FAILURE, payload: error.response}
          );
        }
      );
  };
};