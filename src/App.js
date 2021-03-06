import React, { useState } from 'react';
import './App.css'; 

function Todo ( {todo, index, completeTodo, removeTodo} ) {  
  //the todo componenets returns a list of todos and a feature to complete and remove

  return (<div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
            className='todo'
         > 
            {/* test */}
            {todo.text} 
            <div>
              <button onClick={() => completeTodo(index)}>Complete</button>
              <button onClick={() => removeTodo(index)}>x</button>
            </div>
         </div>
  );

}

function TodoForm ({addTodo}) {
  //component for inputing a new todo
  const [value, setValue] = useState(''); 

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  };

  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      className='input' 
      value={value} 
      placeholder='Add ToDo'
      onChange={e => setValue(e.target.value)}/>
    </form>
  );
}

function App() {    //the app component where we create our state

  const [todos, setTodos ] = useState([
    {
      text: "TODO app createdby Jose",
      isCompleted: false 
    },
    {
      text: 'build toDo app',
      isCompleted: false 
    },
    {
      text: 'call finance',
      isCompleted: false 
    }
  ]);

  //Arrow function for creating new TODO
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  //arrow function for marking TODO complete
  const completeTodo = index => {
    const  newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  };

  //Arrow function for dleting a TODO
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return(
    <div className = 'app'>
      <div className = 'todo-list'>
        {todos.map((todo, index) => (   
          <Todo
          key={index} 
          index={index} 
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo} 
        />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}


export default App;