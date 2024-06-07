"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import "./sidebar.css"

function Sidebar() {
    const router = useRouter();

    const handleClick = (link: string) => {
        console.log("navigating to: ", link)
        router.push(link)
    }

    const pathname = usePathname();

    return (
        <div className="sidebar-container">
            <div className="profile">
                <div id="image">
                    <Image width={70} height={70} src="/default_user.jpg" alt="profile" />
                </div>
                <h1>
                    <span>John</span>
                    <span>Doe</span>
                </h1>
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
