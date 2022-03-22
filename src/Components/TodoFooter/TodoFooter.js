import { useDispatch, useSelector } from "react-redux"
import { actionDeleteCompleted } from "../../store/ActtionsCreators"
import classes from "../ToDoMain/TodoMain.module.css"

function Footer(){
    const todos = useSelector((state)=>{
      return state.todos
    })
    const dispatch = useDispatch()
    
    let completed = todos.filter(todo=>todo.isDone).length

    return(
        <div className={classes.card}>
            <p> {completed}/{todos.length} Completed</p>
            
            <button onClick = {()=>dispatch(actionDeleteCompleted())}> Deleted Completed Todos</button>
        </div>
    )
}
export default Footer