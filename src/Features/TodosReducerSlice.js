
import { ACTION_TYPES } from "../store/ActtionsCreators";
import { data } from "../store/store";

export function todosReducerSlice(state= data.todos, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD:
            return[ ...state,{
                id:Math.random(),
                title:action.payload.title,
                description:action.payload.description,
                isDone:false,
                isHidden:false
            }];
        case ACTION_TYPES.DONE:
             return state.map((todoItem)=>{
                    return  todoItem.id === action.payload.id ? {
                         ...todoItem,
                       isDone:action.payload.isDone
                    }:{...todoItem}
                });
        
      case ACTION_TYPES.EDIT:
        return state.map((todoItem) => {
            return  todoItem.id === action.payload.id ? {
                ...todoItem,
                title:action.payload.title,
                description:action.payload.description
            } : {...todoItem}
        });
    
      case ACTION_TYPES.DELETE:
          return state.filter(item=>item.id!==action.payload.id);
      case ACTION_TYPES.SEARCH:
            console.log(state)
            return state.map((todoItem) => {
                return {...todoItem,
                isHidden:!todoItem.title.toLowerCase().includes(action.payload.title)} 
            });
           
           

     case ACTION_TYPES.DELETECOMPLETED:
        return state.filter((item)=>!item.isDone)
      default:
        return state
    }
  }


  