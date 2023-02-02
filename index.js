import React from 'react';
import { createRoot } from 'react-dom/client';
import Form from './form.js';
import FetchAllPlayers from './fetchAllPlayers.js';

const App = () => {
    return (
        <React.Fragment>
            <h1>Puppy Bowl 2023</h1>
            
            <Form />
            
            <FetchAllPlayers />
            
        </React.Fragment>
    )
  
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);