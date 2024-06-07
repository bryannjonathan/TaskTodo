import React from "react";

import { buttonProps } from "@/types";

const Button = ( {type, text, onClick, actionButton, className, bgColor, ...props} : buttonProps) => {
    return(
        <div className={className}>
            <button onClick={onClick} type={type}>
                {text}
            </button>
        </div>
    )
}

export default Button;