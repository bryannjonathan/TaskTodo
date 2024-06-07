"use client";

import React from "react";
import { SignUp } from "@clerk/nextjs";
import "./page.css"

function SignUpPage(){
    return(
        <div className="sign-up">
            <SignUp />
        </div>
    )
}

export default SignUpPage;