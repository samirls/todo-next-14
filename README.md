<h1>Todo list made with Next.js 14, app folder.</h1>

Schemas:

CREATE TABLE todo_users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    sex VARCHAR(50) NOT NULL,
    color VARCHAR(50) NOT NULL,
    age VARCHAR(50) NOT NULL
);

CREATE TABLE todo_tasks (
    task_id SERIAL PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    user_id INT REFERENCES todo_users(user_id) ON DELETE CASCADE
);

CREATE TABLE todo_user_task_link (
    user_task_link_id SERIAL PRIMARY KEY,
    task_id_link INT REFERENCES todo_tasks(task_id) ON DELETE CASCADE,
    user_id_link INT REFERENCES todo_users(user_id) ON DELETE CASCADE
);

CREATE TABLE todo_friends (
    friends_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES todo_users(user_id) ON DELETE CASCADE,
    added_friend_id INT REFERENCES todo_users(user_id) ON DELETE CASCADE
);