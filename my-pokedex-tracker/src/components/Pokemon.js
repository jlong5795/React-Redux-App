import React from 'react';


const Pokemon = props => {
    return (
        <div className='pokemon'>
            <h2>{props.name.charAt(0).toUpperCase()+props.name.slice(1)}</h2>
            <img src={`${props.sprite}`} alt={`${props.name}`}/>
            <p>Height: {props.height} kgs.</p>
            <p>Weight: {props.weight} lbs.</p>
        </div>
    );
};

export default Pokemon;


