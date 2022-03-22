import React, { useState, useCallback } from "react";
import classes from "../ToDoMain/TodoMain.module.css";
import {useDispatch} from "react-redux"
import {actionEdit,actionDone,actionDelete} from '../../store/ActtionsCreators';

const TodoCard = ({item}) => {
    const [title,setTitle]= useState(item.title)
    const [description,setDescription]= useState(item.description)
    // const ctx = useContext(TodoContext)
    const [editButtonVis, setEditButtonVis] = useState(false)
    const dispatch = useDispatch()
  
    const onEditClickHandler = () => {
        setEditButtonVis(true)
        console.log('editClickHandler');
    }


    const handleSave =useCallback(() => {
        dispatch(actionEdit(item.id, title, description))
        setEditButtonVis(false)
        console.log(editButtonVis);
    },[description, dispatch, editButtonVis, item.id, title])
    
   
    return (
        // !item.isHidden?
        <div id = {classes.bookDiv} key = {item.id}>
            <div className={classes.card}>
                <input 
                onClick={()=>{dispatch(actionDone(item.id, !item.isDone))}}
                type = 'checkbox'/>
            
                <span>
                    {item.title}
                </span>
                <div>
                    {item.title+":   "+item.description}
                </div>
                <button 
                    className={classes.btn}  
                    onClick = {()=>dispatch(actionDelete(item.id))}
                >
                    Delete
                </button>
                <div style ={{display:editButtonVis?'block':'none'}}>
                    <input 
                        className={classes.inputs}
                        value = {title}   
                        onChange = {(e) => setTitle(e.target.value)} 
                        placeholder="title"
                        type="text"/>
                    <input
                        className={classes.inputs} 
                        value = {description}   
                        placeholder="descriptipon"
                        onChange = {(e) => setDescription(e.target.value)} 
                        type="text"/>
                    <button 
                        className={classes.btn}  
                         onClick = {() => handleSave()}
                    >  Save your Edit
                    </button>
                </div>
                <button 
                    className={classes.btn} 
                    onClick = {onEditClickHandler} 
                >
                    Edit
                </button>
            </div>

        </div> 
    )
}

export default TodoCard;