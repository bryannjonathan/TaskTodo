// import AddTodo from "@/components/api/addTodo";
import prisma from "@/utils/prisma";
import { taskProps } from "@/types";
import TaskCard from "@/components/tasks/taskCard";
import AddTodo from "@/components/tasks/addTask";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

async function getData(userId: string) {
  try {
    const data = await prisma.task.findMany({
      select: {
        title: true,
        id: true,
        isCompleted: true,
      },
      where: {
        userId: userId,
      },
      orderBy: [
        {
          isCompleted: "asc",
        },
        {
          createdAt: "desc",
        },
      ],
    });

    return data;

  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function Home() {

  const { userId } = auth();
    if(!userId){
        return NextResponse.json({
            msg: "Unauthorized user access",
        })
    }
  const data = await getData(userId);

  return (
    <div className="content-container">
      <AddTodo />
      <div className="header-title">
        <h1>All tasks</h1>
      </div>
      {data && data.length > 0 ? (
        data.map((task: any) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p>No Tasks Available</p>
      )}
      {/* {process.env.DATABASE_URL} */}
    </div>
      
  );
}
