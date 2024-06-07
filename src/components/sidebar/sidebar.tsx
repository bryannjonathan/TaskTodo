"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import "./sidebar.css"
import page from "@/app/completed/page";
import { auth, getAuth } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import { PiSignOutBold } from "react-icons/pi";
import { useUser } from "@clerk/nextjs";

function Sidebar() {
    const router = useRouter();

    const handleClick = (link: string) => {
        console.log("navigating to: ", link)
        router.push(link)
    }

    const { user } = useUser();
    const username = (user?.username);

    const pathname = usePathname();

    return (
        <div className="sidebar-container">
            <div className="profile">
                <div id="image">
                    {/* <Image width={70} height={70} src="/default_user.jpg" alt="profile" /> */}
                    {/* <img id="image" src="/default_user.jpg" alt="profile"/> */}

                </div>
                <div id="name">
                    <h1>
                        <span>{username || "User"}</span>
                    </h1>
                </div>
                <div id="sign-out">
                    <SignOutButton>
                        <PiSignOutBold />
                    </SignOutButton>
                </div>
                
            </div>

            

            <ul className="nav-container">
                <li
                    className={`nav-item ${pathname === "/" ? "active" : ""}`}
                    onClick={() => handleClick("/")}
                >
                    All Tasks
                </li>
                <li
                    className={`nav-item ${pathname === "/completed" ? "active" : ""}`}
                    onClick={() => handleClick("/completed")}
                >
                    Completed
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
