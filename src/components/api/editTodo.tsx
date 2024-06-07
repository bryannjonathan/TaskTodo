"use client";

import React from "react";
import { useState } from "react";

import Button from "../buttons/button";
import { MdEdit } from "react-icons/md";
import Input from "../input/input";
import Form from "../form/form";
import { taskProps } from "@/types";

const EditTodo = ({task} : {task : taskProps}) => {

    const [editState, setEditState] = useState(false)

    const handleEdit = () => {
        setEditState(!editState)
    }

    return(
        <div className="flex gap-5 items-center">
            <Button onClick={handleEdit} text={<MdEdit />}/>
            {editState ? (
                <Form action={EditTodo}>
                    <Input name="indputId" value={task.id} type="hidden"/>
                    <Button type="submit" text="save" />
                </Form>
            ) : null}
        </div>
    )
}

export default EditTodo;