import React, { useState } from 'react';
import './App.css'; 

function Todo (todo, index ) {  
  return <div className='todo'> { todo.text } </div>;
}

function TofoForm ({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" className='input' value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

function App() { 
  const [todos, setTodos ] = useState([
    {
      text: "learn about react",
      isCompleted: false 
    },
    {
      text: 'build toDo app',
      isCompleted: false 
    },
    {
      text: 'another Todo',
      isCompleted: false 
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