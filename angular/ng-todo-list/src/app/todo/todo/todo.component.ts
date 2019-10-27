import { Component, OnInit, Input } from '@angular/core';
import { Todo, TodoServiceService } from 'src/app/swagger';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  constructor(protected  todoService:  TodoServiceService) { }
  
  ngOnInit() {
  }

  update() {
    const newTodo = JSON.parse(JSON.stringify(this.todo));
    newTodo.done = !newTodo.done;
    this.todoService.todoIdPatch(this.todo.id, newTodo).subscribe(
      (data) => this.todo = data
    );
  }

}
