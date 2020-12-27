import React from 'react';

const Form = (props) => {
    const inTxtHandler = (e) => {
        console.log(e.target.value);
        props.setInTxt(e.target.value);
    };

    return(
        <form>
            <input onChange={inTxtHandler} type="text" className="todo-input"/>
            <button className="todo-button" type='submit'>
                {/* Look for other icons if available */}
                <i className='fas fa-plus-square'></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all"> All </option>
                    <option value="completed"> Completed </option>
                    <option value="unfinished"> Unfinished </option>
                </select>
            </div>
        </form>
    );
}; 

export default Form;