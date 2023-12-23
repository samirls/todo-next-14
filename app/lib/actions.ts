"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { signIn } from '@/auth';
import bcrypt from 'bcrypt';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export async function authenticate( { email, password }: { email: string, password: string } ) {

  try {
    await signIn('credentials', { email, password, redirect: false });

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          throw new Error('Invalid credentials.');
        default:
          throw new Error('Something went wrong.');
      }
    }
    throw error;
  }
}


export async function register(name: string, email: string, password: string, sex: string, color: string, age: string) {
  try {

    const hashedPassword = await bcrypt.hash(password, 10);

    await sql`
    INSERT INTO todo_users (name, email, password, sex, color, age)
    VALUES (${name}, ${email}, ${hashedPassword}, ${sex}, ${color}, ${age});
  `;
  } catch (error) {
    return {
      message: "Database Error. Failed to register.",
    };
  }
}


////////////////////////////////////////////////////////////////////////////////////////////


export async function createTask(task: string, user_id: number | undefined | null) {
  try {
    await sql`
    INSERT INTO todo_tasks (task, user_id)
    VALUES (${task}, ${user_id})
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

export async function shareTask(task_id_link: number, user_id_link: number[]) {
  try {
    await sql`
    INSERT INTO todo_user_task_link (task_id_link, user_id_link)
    VALUES (${task_id_link}, ${user_id_link.join(',')});
  `;
  } catch (error) {
    return {
      message: "Database Error. Failed to share task.",
    };
  }
  revalidatePath("/tasks");
}

////////////////////////////////////////////////////////////////////////////////////////////


export async function addFriend(user_id: number | undefined, added_friend_id: number) {
  try {
    await sql`
    INSERT INTO todo_friends (user_id, added_friend_id)
    VALUES (${user_id}, ${added_friend_id});
  `;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
  revalidatePath("/friends");
}

export async function deleteFriend(user_id: number | undefined, added_friend_id: number) {
  try {
    await sql`
    DELETE FROM todo_friends
    WHERE user_id = ${user_id} AND added_friend_id = ${added_friend_id};
    `;
    revalidatePath("/tasks");
    return { message: "Task deleted." };
  } catch (error) {
    return { message: "Database Error." };
  }
}


