import { 
    FETCHING_POKEMON_START, 
    FETCHING_POKEMON_SUCCESS, 
    FETCHING_POKEMON_FAILURE,
    UPDATE_LOCAL_POKEDEX_START,
    UPDATE_LOCAL_POKEDEX_SUCCESS,
    UPDATE_LOCAL_POKEDEX_FAILURE 
    } from '../actions';

const initialState = {
    pokemon: {},
    pokedex: [],
    isLoading: false,
    error: null,
    initialized: false,
    pokeIndex: 0,
    isUpdating: false,
    isLogginIn: false,
    isLoggedIn: false
};

export const pokeDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POKEMON_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_POKEMON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemon: {
                    ...state.pokemon,
                    name: action.payload.name,
                    sprite: action.payload.sprites.front_default,
                    height: action.payload.height,
                    weight: action.payload.weight,
                    id: action.payload.id
                },
                initialized: true,
                pokeIndex: action.payload.id
            };
        case FETCHING_POKEMON_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case UPDATE_LOCAL_POKEDEX_START:
            return {

            };
        case UPDATE_LOCAL_POKEDEX_SUCCESS:
            return {

            };
        case UPDATE_LOCAL_POKEDEX_FAILURE:
            return {

            };
        default:
            return state
    };
};