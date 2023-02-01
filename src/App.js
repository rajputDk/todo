import React, { useState } from 'react'
import './App.css';

function App() {
  const [input,setInput]=useState(" ")
  const [upDate,setUpDate]=useState([
    
  ])
  const addTodo =(e)=>{
    e.preventDefault();
    const user={
      input, 
    }
    setUpDate([...upDate,user])
    setInput("")
  };
  return (
    <div>
     <div className='main-container'> 
      <div className='heading'>
      <h1>To-Do List</h1>
      </div>
       <input type="text"
        id="in"
         placeholder='Add Here'
         value={input} 
         onChange={(e)=> setInput(e.target.value)}/>
       <button className='btn' onClick={addTodo}>Add</button>
       <div className='list'>
       {
          upDate.map(user=>{
            return(
              <h1 className='head'>{user.input}</h1>
            )
          })
        }
     
       </div>
     </div> 
    </div>
  );
}

export default App;
       
