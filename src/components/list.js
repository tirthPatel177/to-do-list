import React from 'react';
//importing components
import Task from './task';

const TodoList = ({tasks, setTasks, filtered}) => {
    // console.log(tasks);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filtered.map((task) =>(
                        <Task 
                        text={task.text} 
                        key={task.id}
                        task={task}
                        tasks={tasks} setTasks={setTasks}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;