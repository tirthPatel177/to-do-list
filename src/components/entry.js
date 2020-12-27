import React from 'react';

const Form = ({inTxt, setInTxt, tasks, setTasks, setOption}) => {
    const inTxtHandler = (e) => {
        // console.log(e.target.value);
        setInTxt(e.target.value);
    };

    const submitTaskHandler = (e) => {
        e.preventDefault();
        setTasks([
            ...tasks,
            {text: inTxt, completed:false, id:Math.random()*1000}
        ]);
        setInTxt("");
    };

    const optionHandler = (e) => {
        // console.log(e.target.value);
        setOption(e.target.value);
    };

    return(
        <form>
            <input value={inTxt} onChange={inTxtHandler} type="text" className="todo-input"/>
            <button onClick={submitTaskHandler} className="todo-button" type='submit'>
                {/* Look for other icons if available */}
                <i className='fas fa-plus-square'></i>
            </button>
            <div className="select">
                <select onChange={optionHandler} name="todos" className="filter-todo">
                    <option value="all"> All </option>
                    <option value="completed"> Completed </option>
                    <option value="unfinished"> Unfinished </option>
                </select>
            </div>
        </form>
    );
}; 

export default Form;