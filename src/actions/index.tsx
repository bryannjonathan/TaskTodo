"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function createTodo(formData: FormData){
    const input = formData.get('input') as string;
    console.log(input);


    const { userId } = auth();
    if(!userId){
        return NextResponse.json({
            msg: "Unauthorized user access",
        })
    }

    try{
        await prisma.task.create({
            data:{
                title: input,
                userId: userId
            }
        })
    } catch (e) {
        return NextResponse.json({
            msg: e,
        })
    }
    

    revalidatePath("/")

}

export async function changeStatus(formData: FormData){
    const inputId = formData.get("inputId") as string;

    const { userId } = auth();
    if(!userId){
        return NextResponse.json({
            msg: "Unauthorized user access",
        })
    }

    

    try{
        const todo = await prisma.task.findUnique({
            where: {
                id: inputId,
                userId: userId,
            }
        })
    
        const updateStatus = !todo?.isCompleted; // inver the status
    
        await prisma.task.update({
            where: {
                id: inputId,
                userId: userId,
            },
    
            data: {
                isCompleted: updateStatus,
            }
        })
    } catch (e) {
        return NextResponse.json({
            msg: e,
        })
    }

    revalidatePath("/")
}

export async function editTodo(formData: FormData) {
    const newTitle = formData.get("newTitle") as string;
    const inputId = formData.get("inputId") as string;
  
    const { userId } = auth();
    if(!userId){
        return NextResponse.json({
            msg: "Unauthorized user access",
        })
    }


    

    try{
        await prisma.task.update({
            where: {
              id: inputId,
              userId: userId,
            },
            data: {
              title: newTitle,
              userId: userId,
            },
          });
    } catch (e) {
        return NextResponse.json({
            msg: e,
        })
    }
  
    revalidatePath("/");
  }


export async function deleteTodo(formData: FormData){
    const inputId = formData.get("inputId") as string;

    const { userId } = auth();
    if(!userId){
        return NextResponse.json({
            msg: "Unauthorized user access",
        })
    }

    await prisma.task.delete({
        where:{
            id: inputId,
            userId: userId,
        },
    })

    revalidatePath("/")
}