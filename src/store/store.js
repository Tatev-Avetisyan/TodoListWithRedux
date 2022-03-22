
import { combineReducers } from "redux";
import { createStore } from "redux";
import { todosReducerSlice } from "../Features/TodosReducerSlice";

export const data ={
    todos:[
    {id:1,
    title:"Lesson1",
    description:'Welcome to the course! Guide  through what you can expect from the course!',
    isDone:false,
    isHidden:false
},
    {id:2,
    title:"Lesson2",
    description:'What is TypeScript and why is it awesome? In this lecture, we will take a closer look at the advantages and new features TypeScript adds to JavaScript.',
    isDone:false,
    isHidden:false
},
    {id:3,
    title:"Lesson3",
    description:'Time to summarize the advantages we learned about over the last lecture - what is amazing about TypeScript?',
    isDone:false,
    isHidden:false
},

]

}


export const store = createStore(combineReducers({
    todos:todosReducerSlice,
}), data)