import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/test.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task:Task;
  @Input() index: number;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.task);
  }

  updateTask() {
    this.task.isDone=true;
  }

  deleteTask() {
    this.taskService.removeTask(this.index);
  }

}
