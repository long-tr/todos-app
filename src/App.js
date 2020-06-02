import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
function App() {
  return (
    <div className="App">
      <div className="TodoApp">
          <TodoList />
      </div>
    </div>
  );
}

export default App;
