import AddTodo from "@/components/todos/addTodo";
import prisma from "@/utils/prisma";
import Todo from "@/components/todos/todo";

async function getData(){
  const data = await prisma.task.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },

    orderBy: {
      createdAt: "asc",
    },

  })

  return data
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">Todo App</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        <span className="lowercase">w/</span> Srver Actions
      </h1>

      <div className="flex justify-center flex-col items-center">
        {/* input todo */}
        <AddTodo />
        {/* map todos */}
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((task: any, id:any) => (
            // <div id={id}>
            //   {task.title}
            // </div>
            <div id={id}>
              <Todo task={task}/>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
