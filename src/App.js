import React from 'react';
import logo from './logo.svg';
import './App.css';

import ToDoItem from "./Components/ToDoItem";
import { TodoContainer } from './Components/TodosContainer';

function App() {

  return (

    <div style = {{
      maxWidth: "550px",
      margin: "1rem auto"
    }}>
      <TodoContainer />
      
    </div>
  );
}

export default App;
