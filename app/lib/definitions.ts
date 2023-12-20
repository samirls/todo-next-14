export type Tasks = {
  task_id: number;
  task: string;
  task_user_id: number;
  task_user_name: string;
};

export type Friends = {
  friends_id: number;
  user_id: number;
  added_friend_id: number;
  name: string;
};

export type User = {
  user_id: number;
  id: string;
  name: string;
  email: string;
  password: string;
  sex: string;
  color: string;
  age: string;
};

export type Link = {
  user_id_link: number;
  name: string;
  user_task_link_id: number;
  task_id_link: number;
}