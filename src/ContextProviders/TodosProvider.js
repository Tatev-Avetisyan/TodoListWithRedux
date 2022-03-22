// import React from 'react';
// import {useState,createContext, useMemo} from 'react'
// import { useSelector } from 'react-redux';



// export const TodoContext = createContext({
//     todos:[],
//     filteredTodo:''
    
// })



// const TodosProvider = (props)=>{

//     const todos = useSelector((state)=>{
//         return state
//     });
   
//     const[filteredTodo, setFilteredTodo]=useState('')

  
// const handleFilter= (e)=>{
//     setFilteredTodo(e.target.value);
// }
 
// const filteredList = useMemo(()=>{
//     console.log(todos);
//     todos.filter(item=>item.title.toLowerCase().includes(filteredTodo))
// },[filteredTodo, todos]);



//     return(
//         <TodoContext.Provider 
//         value = {{
           
//             filteredList:filteredList,
//             filteredTodo:filteredTodo,
//             onChange:handleFilter,
            
//         }}> 
//             {props.children}
//         </TodoContext.Provider>
//     )

// }
// export default TodosProvider