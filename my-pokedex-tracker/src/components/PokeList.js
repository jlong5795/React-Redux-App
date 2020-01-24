import React, { useState } from 'react';
import { connect } from 'react-redux';

import Pokemon from './Pokemon';

import { fetchPokemonByNumber, fetchPokemonByName } from '../actions';

const PokeList = props => {
    
    const [newPokemon, setNewPokemon] = useState('');
    const [pokemonNumber, setPokemonNumber] = useState(2);

    const handleChanges = e => {
        setNewPokemon(e.target.value.toLowerCase());
    };

    const nextPokemon = () => {
        const tempNumber = props.pokemon.id + 1;
        setPokemonNumber(tempNumber);
        props.fetchPokemonByNumber(pokemonNumber);
    }

    const prevPokemon = () => {
        const tempNumber = pokemonNumber - 1;
        setPokemonNumber(tempNumber);
        props.fetchPokemonByNumber(pokemonNumber);
    }

    const searchPokemon = (e) => {
        e.preventDefault();
        console.log('Expect Zapdos', newPokemon);
        props.fetchPokemonByName(newPokemon);
    }
    
    

    return (
        <div>
            <div className='pokemon-form'>
                {/*<button onClick={prevPokemon}>Previous Pokemon</button>       
                <button onClick={nextPokemon}>Next Pokemon</button>*/}
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
            {props.pokemon && !props.isLoading && (
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
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {fetchPokemonByNumber, fetchPokemonByName})(PokeList);