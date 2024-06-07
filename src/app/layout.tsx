import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { auth, clerkClient } from "@clerk/nextjs/server";

import Sidebar from "@/components/sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskTodo",
  description: "TaskTodo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { userId } = auth();
  
  console.log("userId : ", userId)

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
    
        </head>
        <body className={inter.className}>
          <div className="global">
            {userId && <Sidebar />}
            {children}
          </div>   
        </body>
        
        
        
      </html>
    </ClerkProvider>
  );
}
