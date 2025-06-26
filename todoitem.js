import React from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => toggleTodo(index)}>✓</button>
      <button onClick={() => deleteTodo(index)}>✕</button>
    </div>
  );
}

export default TodoItem;
