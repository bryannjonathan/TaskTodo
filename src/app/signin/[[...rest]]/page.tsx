"use client";

import React from 'react';
import { SignIn } from '@clerk/nextjs';
import "./page.css"

function page(){
    return(
        <div className="sign-in">
            {/* <SignIn /> */}
            <SignIn />
        </div>
    )
}

export default page;
