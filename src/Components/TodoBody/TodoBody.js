import React from 'react';
import TodoCard from "../TodoCard" 
import {useSelector} from "react-redux"    



function TodoBody(){
    
    const todos = useSelector((state)=>{
        return state.todos
    });
    
    return(
        <div>
            {todos.map((item)=>{
                return <div key = {item.id} style ={{
                    display:item.isHidden?'none':''
                }} > <TodoCard  item={item}/> </div>
            })}

        </div>
    )
}

export default TodoBody