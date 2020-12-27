import React, {useState} from "react";
import './App.css';
// Importing Components
import Form from './components/entry';
import TodoList from "./components/list";


function App() {
  const [inTxt, setInTxt] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Plan Your Day! {/*inTxt*/}</h1>
      </header>
      <Form setInTxt={setInTxt}/>
      <TodoList />
    </div>
  );
}

export default App;
