"use client";

import React from "react"
import { useRef } from "react"

import { formProps } from "@/types"

const Form = ({ children, action, className, onSubmit }: formProps ) => {

    const ref = useRef<HTMLFormElement>(null);

    return(
        <form 
            action={async (formData) => {
                await action(formData);
                ref.current?.reset()
            }} 
            onSubmit={onSubmit} 
            ref={ref}
        >
            {children}
        </form>
    )
}

export default Form