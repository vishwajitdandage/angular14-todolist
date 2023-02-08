import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { NewTask } from './NewTask.dto';
import { TaskItem } from './task-item.dto';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskNgForm: any;
  constructor(private route: ActivatedRoute, private tasksService: TasksService) {

  }
  newTaskTitle: string = ""
  tasks = this.tasksService.getAllTasks(this.route.snapshot.params['date'])
  newTask: NewTask = new NewTask();
  date: Date = new Date()
  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate))

  }

  addTask(taskNgForm: NgForm) {
    if (taskNgForm.touched == false)
      return
    this.tasksService.addTask(this.newTask.date,this.newTask)
    taskNgForm.reset({ date: this.newTask.date });
  }
  removeTask(removeTask: TaskItem) {
    //alert(newTask)
    var userConfirmed = confirm(`Do you want to remove the task? \n "${removeTask.title}"`)
    if (userConfirmed) {
      this.tasksService.removeTask(this.newTask.date,removeTask)
    }
  }
}
