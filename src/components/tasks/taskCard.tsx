"use client";

import React from "react";
import { useState } from "react";
import { taskProps } from "@/types";
import "./taskCard.css";
import { changeStatus, deleteTodo, editTodo } from "@/actions";
import Form from "../form/form";
import Button from "../buttons/button";
import Input from "../input/input";
import { FaTrash } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";

function TaskCard({ task }: { task: taskProps }) {
    const [editTodoState, setEditState] = useState(false)

    const handleEdit = () => {
        // if (task.isCompleted){
        //     return
        // }
        setEditState(!editTodoState)
    }

    const handleSubmit = () => {
        setEditState(false)
    }


    return (
        <div className="card-container">
            <div className="task-content">
                {/* Completed Button */}
                {/* <div className={`status-circle ${task.isCompleted ? "completed" : ""}`}>
                    {task.isCompleted && <IoCheckmarkSharp />}
                </div> */}
                <Form action={changeStatus}>
                    <Input name="inputId" value={task.id} type="hidden"></Input>
                    <div >
                        <Button
                            text={task.isCompleted ? <FaCircleCheck /> : <FaCircle />}
                            type="submit"
                            className={task.isCompleted ? "status-circle completed" : "status-circle not-completed"}
                        >
                        </Button>
                    </div>
                    
                    
                </Form>

                {/* Task Title */}
                {editTodoState ? (
                    <Form action={editTodo} onSubmit={handleSubmit}>
                    <Input name="inputId" value={task.id} type="hidden"></Input>
                    <div className="flex justify-center ">
                      <Input type="text" name="newTitle" placeholder="Edit Todo..." className="input-container" />
                    </div>
                  </Form>
                ) : (
                    <div className="task-title">{task.title}</div>
                )}
            </div>
            <div className="task-actions">
                {/* Edit and Delete Button */}
                <Button onClick={handleEdit} text={<FaPen />} className="edit-button"/>
                
                <Form action={deleteTodo}>
                    <Input type="hidden" name="inputId" value={task.id}></Input>
                    <Button 
                        className="delete-button"
                        type="submit"
                        text={<FaTrash />}
                    ></Button>
                </Form>
            </div>
        </div>
    );
}

export default TaskCard;
