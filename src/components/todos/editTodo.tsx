"use client";

import React from "react";
import { useState } from "react";

import Button from "../buttons/button";
import { MdEdit } from "react-icons/md";
import Input from "../input/input";
import Form from "../form/form";

const EditTodo = () => {

    const [editState, setEditState] = useState(false)

    const handleEdit = () => {
        setEditState(!editState)
    }

    return(
        <div className="flex gap-5 items-center">
            <Button onClick={handleEdit} text={<MdEdit />}/>
            {editState ? (<Form><Input /></Form>) : null}
        </div>
    )
}

export default EditTodo;