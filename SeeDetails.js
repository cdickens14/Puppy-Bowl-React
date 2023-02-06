import React from 'react';

const SeeDetails = ({players, id, name, breed, imageUrl}) => {
    return (
            <React.Fragment>
                <h1>Puppy Details</h1>
                <div id="id">{id}</div>
                <div id="name">{name}</div>
                <div id="breed">{breed}</div>
                <img src={imageUrl} alt='image of puppy'></img>
            </React.Fragment>
    )
}


export default SeeDetails;