import React, { useState } from 'react';



const App = ()=>{

    const[name, setName] = useState();
    const[fuLLName, setFuLLName] = useState();
    



    const InputEvent =(event) =>{
        
        setName(event.target.value);
    };
    const onSubmit = () =>{
        setFuLLName(name);
    }
    
    return(
        <>
        <div>
            <h1>Hello  {fuLLName} </h1>
            <input type='text' placeholder = "Enter your name" 
                onChange={InputEvent}
                value={name}
            />
            <button onClick={onSubmit}> click me </button>
        </div>
    </>
    );

};

export default App;