"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function createTask(task:string) {
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
  revalidatePath("/todos");
}

export async function deleteTask(id: number) {

  try {
    await sql`DELETE FROM todo_tasks WHERE task_id = ${id}`;
    revalidatePath('/todos');
    return { message: 'Task deleted.' };
  } catch (error) {
    return { message: 'Database Error.' };
  }
}