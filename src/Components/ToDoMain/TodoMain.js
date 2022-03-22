// import {useContext} from "react"
import React from 'react';
import classes from "../ToDoMain/TodoMain.module.css";
import TodoHead from "../TodoHead/TodoHead";
import TodoBody from "../TodoBody/TodoBody";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFooter from '../TodoFooter/TodoFooter';
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { actionAdd, actionDelete, actionDeleteCompleted, actionDone, actionEdit } from "../../store/ActtionsCreators";



export const TodoMain= ()=>{
    const todos = useSelector((state)=>{
        return state.todos
    });
    const dispatch = useDispatch()

    const handleAdd = useCallback((title,description)=>{
        dispatch(actionAdd(title,description));
        console.log("handleAdd is working");
    },[dispatch]);


    const handleEdit=useCallback((id, title, description)=>{
        dispatch(actionEdit(id, title, description))
    },[dispatch]);

    const handleDelete=useCallback((id)=>{
        dispatch(actionDelete(id))
    },[dispatch])

    const handleChecked = useCallback((id,isDone)=>{
        dispatch(actionDone(id,isDone)) 
        console.log(isDone);

    },[dispatch]);



    const handleDeleteCompleted =useCallback(()=>{
        dispatch(actionDeleteCompleted())
    },[dispatch])

        
        return(
            
            <section className = {classes.section}>
                <div  id = {classes.main}>
                    <TodoHead/> 
                    <TodoAdd onAdd={handleAdd} onChecked={handleChecked} /> 
                    <TodoBody onDelete={handleDelete} onEdit = {handleEdit}/>
                    <TodoFooter onDeleteCompleted={handleDeleteCompleted} todos={todos}/> 
                    </div>
                </section>
        )
    }




