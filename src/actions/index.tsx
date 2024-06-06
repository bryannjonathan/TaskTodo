"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData){
    const input = formData.get('input') as string;

    if(!input.trim()){
        return;
    } 

    await prisma.task.create({
        data:{
            title: input,
        }
    })

    revalidatePath("/")
}

export async function changeStatus(formData: FormData){
    const inputId = formData.get("inputId") as string;
    const todo = await prisma.task.findUnique({
        where: {
            id: inputId,
        }
    })

    const updateStatus = !todo?.isCompleted; // inver the status

    await prisma.task.update({
        where: {
            id: inputId,
        },

        data: {
            isCompleted: updateStatus,
        }
    })

    revalidatePath("/")
}

export async function editTodo(formData: FormData){
    const newTitle = formData.get("newTitle") as string;
    const inputId = formData.get("newInputId") as string;

    await prisma.task.update({
        where:{
            id: inputId,
        },
        data:{
            title: newTitle,
        }
    })

    revalidatePath("/")
}


export async function deleteTodo(formData: FormData){
    const inputId = formData.get("inputId") as string;

    await prisma.task.delete({
        where:{
            id: inputId,
        },
    })

    revalidatePath("/")
}