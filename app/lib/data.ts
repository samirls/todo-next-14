import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Tasks } from './definitions';

export async function fetchTasks(user_id: number | undefined | null) {
  noStore();

  try {

    const data = await sql<Tasks>`SELECT * FROM todo_tasks
    WHERE user_id = ${user_id}
    `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comments.');
  }
}