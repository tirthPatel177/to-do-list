import React from 'react';

const Task = ({text, task, tasks, setTasks}) =>{
    const deleteHandler = () => {
        setTasks(tasks.filter((i) => i.id !== task.id));
    };

    const completeHandler = () => {
        setTasks(tasks.map((todo) => {
            if(todo.id === task.id){
                return {
                    ...todo, completed: !todo.completed
                };
            }
            return todo;
        }))
    };
    // console.log(text);
    return(
     <div className="todo">
         <li className={`todo-item ${task.completed ? "completed" : ''}`} >{text}</li>
         <button onClick={completeHandler} className='complete-btn'>
             <i className='fas fa-check'></i>
         </button>
         <button onClick={deleteHandler} className='trash-btn'>
             <i className='fas fa-trash'></i>
         </button>
     </div>   
    );
};

export default Task;