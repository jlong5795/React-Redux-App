import { 
    FETCHING_POKEMON_START, 
    FETCHING_POKEMON_SUCCESS, 
    FETCHING_POKEMON_FAILURE 
    } from '../actions';

const initialState = {
    pokemon: {},
    isLoading: false,
    error: null,
    initialized: false,
    pokeIndex: 0
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
            }
        case FETCHING_POKEMON_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    };
};