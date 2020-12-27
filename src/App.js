import React, {useState} from "react";
import './App.css';
// Importing Components
import Form from './components/entry';
import TodoList from "./components/list";


function App() {
  const [inTxt, setInTxt] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Plan Your Day! {/*inTxt*/}</h1>
      </header>
      <Form inTxt= {inTxt} setInTxt={setInTxt} tasks={tasks} setTasks={setTasks}/>
      <TodoList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
