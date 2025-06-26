import React, { useState } from 'react';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>React TODO App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
