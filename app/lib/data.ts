import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Tasks, Friends, Link } from "./definitions";

export async function fetchTasks(user_id: number | undefined | null) {
  noStore();

  try {
    const data = await sql<Tasks>`
    SELECT 
    todo_tasks.task_id, 
    todo_tasks.task, 
    todo_tasks.user_id AS task_user_id, 
    todo_users.name AS task_user_name
    FROM 
    todo_tasks
    JOIN 
    todo_users ON todo_tasks.user_id = todo_users.user_id
    LEFT JOIN 
    todo_user_task_link ON todo_tasks.task_id = todo_user_task_link.task_id_link
    WHERE 
    todo_tasks.user_id = ${user_id} OR todo_user_task_link.user_id_link = ${user_id};
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch comments.");
  }
}

export async function fetchFriends(user_id: number | undefined | null) {
  noStore();

  try {
    const data = await sql<Friends>`
    SELECT tu.user_id, tu.name
    FROM todo_users tu
    JOIN todo_friends tf ON tu.user_id = tf.added_friend_id
    WHERE tf.user_id = ${user_id};
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch friends.");
  }
}

export async function fetchLinkTable(taskIds: any) {
  noStore();

  try {
    const data = await sql<Link>`
    SELECT tultl.user_id_link, tu.name, tultl.user_task_link_id, tultl.task_id_link
    FROM todo_user_task_link tultl
    JOIN todo_users tu ON tultl.user_id_link = tu.user_id
    WHERE tultl.task_id_link = ANY(${taskIds});
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch link table.");
  }
}
