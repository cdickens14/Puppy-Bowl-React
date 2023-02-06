import React from 'react';
import { createRoot } from 'react-dom/client';
import Form from './Form.js';
import FetchAllPlayers from './FetchAllPlayers.js';
import SeeDetails from './SeeDetails.js';
import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
                <h1>Puppy Bowl 2023</h1>
                
                <Form />
                
                <Routes>
                    <Route path='/home' element={<FetchAllPlayers />}/>
                    <Route path='/details' element={<SeeDetails />}/>
                </Routes>

                
         </React.Fragment>
       
    )
  
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<HashRouter>
    <App />
</HashRouter>
);