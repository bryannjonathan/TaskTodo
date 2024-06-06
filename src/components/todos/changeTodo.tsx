import React from "react";



import Form from "../form/form";
import Button from "../buttons/button";
import Input from "../input/input";
import { taskProps } from "@/types";
import { FaCheck } from "react-icons/fa";
import { changeStatus, createTodo } from "@/actions";

const ChangeTodo = ({ task } : { task: taskProps }) => {
    return(
        <Form action={changeStatus}>
            <Input name="inputId" value={task.id} type="hidden"></Input>
            <Button 
                text={<FaCheck />} 
                actionButton 
                type="submit"
                bgColor={task.isCompleted? 'bg-green-4000' : 'bg-blue-500'}
            >

            </Button>
        </Form>
    )
}

export default ChangeTodo;