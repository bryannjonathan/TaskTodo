import React from "react";

import Input from "../input/input";
import Button from "../buttons/button";
import Form from "../form/form";
import { createTodo } from "@/actions";

const AddTodo = () => {
    return(
        <div>
            <Form action={createTodo}>
                <div className="flex gap-2">
                    <Input name="input" type="text" placeholder="Add Task"/>
                    <Button type="submit" text="Add" bgColor="bg-blue-600"/>
                </div>
            </Form>
        </div>
    )
}

export default AddTodo;