import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false)
  return (
    <div className="App">
      <h1>My todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="What's the task title?" />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" placeholder="What's your description?" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn">
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button className={`isCompleteScreen ${isCompleteScreen==false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>
            Todo
            </button>
          <button className={`isCompleteScreen ${isCompleteScreen==true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>
            Completed
            </button>
        </div>
        <div className="todo-list">
          <h1>Task 1</h1>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}

export default App;
