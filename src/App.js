import React, { useState } from 'react';
import './App.css'; 

function Todo (todo, index, completeTodo, removeTodo  ) {  
  return (<div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
            className='todo'
         > 

            { todo.text } 
            <div>
              <button onClick={() => completeTodo(index)}>Complete</button>
              <button onClick={() => removeTodo(index)}>x</button>
            </div>
         </div>
  );
}

function TodoForm ({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      className='input' 
      value={value} 
      placeholder='Add to do'
      onChange={e => setValue(e.target.value)}/>
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

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const  newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  };



  return(
    <div className = 'app'>
      <div className = 'todo-list'>
        {todos.map((todo, index) => (   
          <Todo 
          key={index} 
          index={index} 
          todo={todo}
          completeTodo={completeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

//creating an arrow function to map the todos

export default App;