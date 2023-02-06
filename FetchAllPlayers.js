import React, { useEffect, useState } from 'react';
import SeeDetails from './SeeDetails.js';
import { Link } from 'react-router-dom';

const FetchAllPlayers = () => {
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
       const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players';
       const fetchData = async() => {
            try {
                const response = await fetch(url);
                const result = await response.json(); 
                setPlayers(result.data.players); 
            } catch (error) {
                console.log('error');
            }
        };
       fetchData();
       <SeeDetails players={players} id={players.id} name={players.name} breed={players.breed} imageUrl = {players.imageUrl} />
    
    }, []);

    return (
            players.map((player) => {
                return (
                    <React.Fragment>
                        <div id="id">#{player.id}</div>
                        <div id="name">{player.name}</div>
                        <img src={player.imageUrl}></img>
                        <Link to='/details' id="link">See Details</Link>
                    </React.Fragment>
                )  }
            )
    )
    
}

export default FetchAllPlayers;