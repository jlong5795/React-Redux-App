import React, { useState } from 'react';
import { connect } from 'react-redux';

import Pokemon from './Pokemon';

import { fetchNextPokemonByNumber, fetchPrevPokemonByNumber, fetchPokemonByName, updatePokedex } from '../actions';

const PokeList = props => {
    
    const [newPokemon, setNewPokemon] = useState('');
    
    const handleChanges = e => {
        setNewPokemon(e.target.value.toLowerCase());
    };

    const nextPokemon = () => {
        props.fetchNextPokemonByNumber(props.pokeIndex);
    }

    const prevPokemon = () => {
        props.fetchPrevPokemonByNumber(props.pokeIndex);
    }

    const searchPokemon = (e) => {
        e.preventDefault();
        props.fetchPokemonByName(newPokemon);
    }

    const updatePokedex = () => {
        props.updatePokedex();
    }
    
    

    return (
        <div>
            <div className='pokemon-form'>
                <div>
                    <button onClick={prevPokemon}>Previous Pokemon</button>       
                    <button onClick={nextPokemon}>Next Pokemon</button>
                </div>
                <button onClick={updatePokedex}>Update Local Pokedex</button>
                <form onSubmit={searchPokemon}>
                    <label>Pokemon Name: </label>
                    <input
                        type='text'
                        name='pokemon'
                        value={newPokemon}
                        onChange={handleChanges}
                    />
                    <button>Search Pokemon</button>
                </form>
            </div>
            {props.initialized && !props.isLoading && (
                <div className='pokemon-info'>
                    <Pokemon 
                    name={props.pokemon.name}
                    sprite={props.pokemon.sprite}
                    height={props.pokemon.height}
                    weight={props.pokemon.weight}
                />
            </div>
        )
        }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        isLoading: state.isLoading,
        initialized: state.initialized,
        pokeIndex: state.pokeIndex
    }
}

export default connect(mapStateToProps, {
    fetchNextPokemonByNumber, fetchPrevPokemonByNumber, fetchPokemonByName, updatePokedex
    })(PokeList);