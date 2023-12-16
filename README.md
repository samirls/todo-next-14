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
    user_id INT REFERENCES todo_users(user_id) ON DELETE CASCADE,
    user_name VARCHAR(50) NOT NULL
);

CREATE TABLE todo_permissions (
    permission_id SERIAL PRIMARY KEY,
    owner_user_id INT REFERENCES todo_users(user_id) ON DELETE CASCADE,
    target_user_id INT REFERENCES todo_users(user_id) ON DELETE CASCADE,
    can_view BOOLEAN NOT NULL DEFAULT FALSE,
    UNIQUE (owner_user_id, target_user_id)
);

INSERT INTO todo_users (name, email, password, sex, color, age) VALUES
    ('Uva', 'uva@gmail.com', '123', 'male', 'blue', '0to18'),
    ('Melao', 'melao@gmail.com', '123', 'female', 'pink', '19to25');

INSERT INTO todo_tasks (task, user_id) VALUES
    ('Descrição da tarefa 1 UVA', 1),
    ('Descrição da tarefa 2 MELAO', 2);