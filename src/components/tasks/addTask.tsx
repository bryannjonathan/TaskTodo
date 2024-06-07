import React, { useState } from "react";
import Input from "../input/input";
import Button from "../buttons/button";
import Form from "../form/form";
import { createTodo } from "@/actions";
import "./addTask.css";

const AddTodo = () => {


    return (
        <div className="add-todo-container">
            <Form action={createTodo} className="form-container">
                <div className="todo-content">
                    <div className="plus-sign">
                        +
                    </div>
                    <Input name ="input" type="text" placeholder="Type here to add a task...." className="input-container"/>
                    {/* <Button type="submit" text="Add"/> */}
                </div> 
                
                
                
            </Form>
            
        </div>
    );
};

export default AddTodo;
