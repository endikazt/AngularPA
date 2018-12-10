import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Array<Todo> = [];
  public todo: Todo = new Todo("", false, false);

  constructor() { }

  ngOnInit() {
    this.todos.push(new Todo("Sacar la basura", false, false));
    this.todos.push(new Todo("Pasear a Goku", false, false));
  }

  addTodo()
  {
    const nuevoTodo = new Todo(this.todo.tarea, this.todo.importante, true);
    this.todos.push(nuevoTodo);
    this.todo = new Todo("", false, false);
  }

  cambiarEstado(todo:Todo)
  {
    todo.terminada = !todo.terminada;
  }

  setTodoClass(todo:Todo): Array<string>
  {
    const clases: Array<string> = [];
    if(todo.terminada)
    {
      clases.push("tachada");
    }
    if(todo.importante)
    {
      clases.push("importante");
    }

    return clases;
  }
}
