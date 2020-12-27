import React, {useState, useEffect} from "react";
import './App.css';
// Importing Components
import Form from './components/entry';
import TodoList from "./components/list";


function App() {
  useEffect(()=>{
    getTodos();
  },[]);

  //Setting Hooks
  const [inTxt, setInTxt] = useState("");
  const [tasks, setTasks] = useState([]);
  const [option, setOption] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(()=>{
    // console.log('hello')
    filter();
    saveTodos();
  }, [tasks, option]);
  //Filtering
  const filter = () => {
    switch(option){
      case 'completed':
        setFiltered(tasks.filter(
          task => task.completed === true
        ))
        break;
      case 'unfinished':
        setFiltered(tasks.filter(
          task => task.completed === false
        ))
        break;
      default:
        setFiltered(tasks);
        break;
    }
  };

  const saveTodos = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const getTodos = () => {
    if(localStorage.getItem('tasks') === null){
      localStorage.setItem('tasks', JSON.stringify([]));
    } else{
      let localinfo = localStorage.getItem('tasks', JSON.stringify(tasks));
      // console.log(JSON.parse(localinfo));
      setTasks(JSON.parse(localinfo));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Plan Your Day! {/*inTxt*/}</h1>
      </header>
      <Form 
      inTxt= {inTxt} setInTxt={setInTxt} 
      tasks={tasks} setTasks={setTasks}
      option={option} setOption={setOption}
      />
      <TodoList tasks={tasks} setTasks={setTasks} filtered={filtered}/>
      <section className='footer'>
        <footer>
          Created By <a href='https://www.linkedin.com/in/tirth-patel-412b70192'>Tirth Patel</a>
        </footer>
      </section>
    </div>
  );
}

export default App;
