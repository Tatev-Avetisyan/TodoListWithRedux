import React from 'react';
import {useState, useCallback} from'react'
import classes from "../ToDoMain/TodoMain.module.css"
import { useDispatch } from 'react-redux';

import { actionAdd } from '../../store/ActtionsCreators';

function TodoAdd(){

    const dispatch = useDispatch()
    
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const onAdded=useCallback(()=>{
        if(title!=="" && description!==""){
            dispatch(actionAdd(title,description));
        }else{
            alert('Please add a title and description ')
        }
        setTitle("");
        setDescription("");
    },[description, dispatch, title])
    

    return(
          <div className={classes.cardDiv}>
            <label className={classes.addTodo} htmlFor = 'add-todo'>Add New Todo</label>
            <br/>
            <input
               className={classes.inputs}
               placeholder = "Title" 
               value={title} 
               type = "text" 
               id="add-todo" 
               onChange= {(e)=>{setTitle(e.target.value)}}   
            />

            <input 
                className={classes.inputs}
                placeholder = "Description" 
                value={description} 
                type = "text" id="add-todo"
                onChange = {(e)=>{setDescription(e.target.value)}}
            />
             <button onClick = {onAdded}  className={classes.btn} > ADD</button>
            </div>
           
   
    )
}
export default TodoAdd


