import React, { useState } from 'react';

const Form = () => {
    const [puppyName, setPuppyName] = useState('');
   
    const handleChange = (event) => {
        event.preventDefault();
        return setPuppyName(event.target.value);
    }
    
    return (
        <React.Fragment>
           <form>
             <label id="label">Search</label>
             <input
             type="text" 
             name="puppy-name" 
             value={puppyName} 
             placeholder="Search Puppy Name"
             onChange={handleChange}>
             </input>
           </form> 
        </React.Fragment>
    )
}

export default Form;