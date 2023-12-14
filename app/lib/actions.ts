"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function createTask(task: string) {
  //throw new Error('Failed on purpose');

  try {
    await sql`
    INSERT INTO todo_tasks (task, user_id)
    VALUES (${task}, 1)
  `;
  } catch (error) {
    return {
      message: "Database Error. Failed to insert task.",
    };
  }
  revalidatePath("/tasks");
}

export async function deleteTask(id: number) {
  try {
    await sql`DELETE FROM todo_tasks WHERE task_id = ${id}`;
    revalidatePath("/tasks");
    return { message: "Task deleted." };
  } catch (error) {
    return { message: "Database Error." };
  }
}

export async function editTask(id: number, editedTask: string) {
  if (editedTask === "") {
    return {
      message: "Missing Fields. Failed to Edit Task.",
    };
  }

  try {
    await sql`
      UPDATE todo_tasks
      SET task = ${editedTask}
      WHERE task_id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error." };
  }

  revalidatePath("/tasks");
}
