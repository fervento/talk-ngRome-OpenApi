import { Component, OnInit } from '@angular/core';
import { TodoServiceService, Todo } from 'src/app/swagger';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(protected  todoService:  TodoServiceService) { }

  ngOnInit() {
    this.todoService.todoGet(10).subscribe(
      (data) => this.todos = data,
      (err) => this.todos = undefined
    );
  }

}
