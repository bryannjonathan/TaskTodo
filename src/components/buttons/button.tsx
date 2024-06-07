import React from "react";
import clsx from "clsx";

import { buttonProps } from "@/types";

const Button = ( {type, text, onClick, actionButton, className, bgColor, ...props} : buttonProps) => {
    return(
        <div className={className}>
            <button onClick={onClick} type={type} 
                // className={clsx(
                // actionButton && "text-white hover:bg-blue-800 focus:ring-4 font-medium founded-lg text-small px-5 py-2.5 me-2 mb-2 focus:outline-none",
                // `${bgColor} hover:${bgColor} font-medium founded-lg text-small px-5 py-2.5 me-2 mb-2 focus:outline-none`
                // )}'
            >
                {text}
            </button>
        </div>
    )
}

export default Button;