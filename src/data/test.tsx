import { ITodoList } from "@/components/todoapp/todolist/todolist";

export type IProjectList = {
  id: number;
  title: string;
  todolist: ITodoList[];
};

let projectList: IProjectList[] = [
  {
    id: 1,
    title: "home",
    todolist: [
      {
        id: 1,
        title: "Category",
        todos: [
          { id: 1, title: "Task 1", date: "Task 1" },
          { id: 2, title: "Task 1", date: "Task 1" },
          { id: 3, title: "Task 1", date: "Task 1" },
        ],
      },
      {
        id: 2,
        title: "Category",
        todos: [
          { id: 1, title: "Task 1", date: "Task 1" },
          { id: 2, title: "Task 1", date: "Task 1" },
          { id: 3, title: "Task 1", date: "Task 1" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "test 2",
    todolist: [
      {
        id: 1,
        title: "Category",
        todos: [
          { id: 1, title: "Task 1", date: "Task 1" },
          { id: 2, title: "Task 1", date: "Task 1" },
          { id: 3, title: "Task 1", date: "Task 1" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "test 3",
    todolist: [
      {
        id: 1,
        title: "Category",
        todos: [{ id: 1, title: "Task 1", date: "Task 1" }],
      },
    ],
  },
];

export default projectList;
