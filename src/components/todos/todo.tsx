import React from "react";


import ChangeTodo from "./changeTodo";
import EditTodo from "./editTodo";
import { taskProps } from "@/types";

const Todo = ({task} : {task : taskProps}) =>{
    return(
        <div className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 oy-4 px-20 rounded-2xl">
            {/* edit todo */}
            <EditTodo />
            <span>{task.title}</span>
            {/* {task.title} */}
            {/* checkmark complete */}
            <ChangeTodo task={task}/>
            {/* delete todo */}
        </div>
    )
}

export default Todo;