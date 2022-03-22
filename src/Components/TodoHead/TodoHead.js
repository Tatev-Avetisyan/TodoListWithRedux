import React from 'react';
import classes from "../ToDoMain/TodoMain.module.css";
import { useDispatch } from "react-redux";
import { actionFilterTodos } from '../../store/ActtionsCreators';

function TodoHead(){
    const dispatch = useDispatch()
    
    const handleChange=(e)=>{
    dispatch(actionFilterTodos(e.target.value))
}
  return(
        <div>
            <div id={classes.title}>
                <h1>MY TODO LIST</h1>
                <label htmlFor="input">SEARCH</label>
                <br/>
                <input onChange={handleChange} placeholder="Search Todo..." type="text" name="" id="input"/>
                <br/>
                <br/>
            </div>   
        </div>
    )
}
export default TodoHead
