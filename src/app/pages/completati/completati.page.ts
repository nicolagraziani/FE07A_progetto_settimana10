import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { getCompleted } from 'src/app/todos.service';

@Component({
  templateUrl: './completati.page.html',
  styleUrls: ['./completati.page.scss']
})

export class CompletatiPage implements OnInit {
  toDoCompleted: Todo[] = [];
  loading!: boolean;

  constructor () {
    this.loading = true;
    getCompleted().then((res: Todo[]) => {
      this.toDoCompleted = res;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
