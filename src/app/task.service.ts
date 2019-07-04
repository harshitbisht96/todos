import { Injectable } from '@angular/core';
import { Task } from './test.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList: Task[]=[
    new Task('Code',false),
    new Task('Eat',true),
    new Task ('Sleep', false)
  ];
  constructor() { }

  getTasks() {
    return this.taskList;
  }
  getTask(index: number){
    return this.taskList[index];
  }

  addTask(task: Task) {
    this.taskList.push(task);
  }
  removeTask(index: number) {
    this.taskList.splice(index,1);
  }
}
