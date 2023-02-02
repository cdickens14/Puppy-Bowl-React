import React, { useEffect, useState } from 'react';

const FetchAllPlayers = () => {
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
       const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players';
       const fetchData = async() => {
        try {
            const response = await fetch(url);
            const result = await response.json(); 
            //console.log(result.data.players);
            setPlayers(result.data.players); 
        } catch (error) {
            console.log('error');
        }
    };
       fetchData();
    
    }, []);

    const seeDetailsButton = (players) => {
        return (
            <React.Fragment>
                <div>{players.id}</div>  
                <div>{players.title}</div>
                <div>{players.breed}</div>
                <div>{players.imageUrl}</div>
            </React.Fragment>
        )
        }

    return (
            players.map(player => {
                <React.Fragment>
                    <div>#{player.id} {player.name}</div>
                    <img src={player.imageUrl}></img>
                    <button id="single-player" onClick={() => seeDetailsButton()}>See Details</button>
                </React.Fragment>
                })
            )
    
}

export default FetchAllPlayers;