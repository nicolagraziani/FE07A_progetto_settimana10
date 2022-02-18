import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import {
  getToDo,
  addToDo,
  checkToDo
} from 'src/app/todos.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  toDoList: Todo[] = [];
  toDoTitle!: string;
  loading!: boolean;


  constructor() {
    this.loading = true;
    getToDo().then((res: Todo[]) => {
      this.toDoList = res;
      this.loading = false;
    });
  }
  ngOnInit(): void {}

  readNewToDo(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.toDoTitle = target.value;
  }

  newToDo() {
    this.loading = true;
    addToDo(this.toDoTitle).then(() => {
      this.loading = false;
    });
  }

  newCheck(toDoChecked: Todo) {
    checkToDo(toDoChecked)
  }
}
