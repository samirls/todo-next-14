export type Tasks = {
  task_id: number;
  task: string;
  user_id: number;
  user_name: string;
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

/* export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}; */