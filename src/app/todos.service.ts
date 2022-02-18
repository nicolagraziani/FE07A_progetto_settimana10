import { Todo } from './models/todo';

let toDoList: Todo[] = [];
let toDoCompleted: Todo[] = [];
let id = 0;

export function getToDo(): Promise<Todo[]> {
  return new Promise((succ) => {
    setTimeout(() => {
      succ(toDoList);
    }, 500);
  });
}

export function getCompleted(): Promise<Todo[]> {
  return new Promise((succ) => {
    setTimeout(() => {
      succ(toDoCompleted);
    }, 500);
  });
}

export function addToDo(ToDoTitle: string) {
  return new Promise<void>((succ) => {
    setTimeout(() => {
      let newToDo: Todo = {
        id: id,
        title: ToDoTitle,
        completed: false,
      };
      toDoList.push(newToDo);
      id++;
      succ();
    }, 500);
  });
}

export function checkToDo(toDoChecked: Todo) {
  let index: number = toDoList.indexOf(toDoChecked);
  toDoList.splice(index, 1);
  toDoCompleted.push(toDoChecked);
}
