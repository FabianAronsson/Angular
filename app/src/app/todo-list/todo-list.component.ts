import { Component, OnInit } from '@angular/core';

import { formatDate } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public amount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public taskList: Task[] = [];

  //Adds tasks
  addTask() {
    this.taskList.push(new Task());
    this.amount += 1;
  }
  //Removes tasks
  removeTask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
      this.amount -= 1;
    }
  }
  
  removeAll(){
    this.taskList = [];
    this.amount = 0;
  }
}

//Defines what kind of properties a Task has
export class Task {
  public title: string = "";
  public description: string = "";
  public date: string = formatDate(new Date(), 'HH:mm', 'en');
  public completed: string = "";
}