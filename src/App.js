import React, { useState } from 'react';
import './App.css'; 

function Todo (todo, index ) {  
  return (
    <div className='todo'> 
      {todo.text} 
    </div>
  )
  
}

function App() {
  const [todos, setTodo ] = useState([
    {
      text: 'learn about react',
      isCompleted: false  //check boolean boolean
    },
    {
      text: 'build toDo app',
      isCompleted: false  //check boolean boolean
    },
    {
      text: 'another Todo',
      isCompleted: false  //check boolean boolean
    }
  ]);

  return(
    <div className = 'app'>
      <div className = 'todo-list'>
        {todos.map((todo, index) => (   
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}

//creating an arrow function to map the todos

export default App;