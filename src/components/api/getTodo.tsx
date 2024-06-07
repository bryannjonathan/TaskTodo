import prisma from "@/utils/prisma"

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

export default data