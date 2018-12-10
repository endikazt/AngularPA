import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'priorizarTodosTerminado',
  pure: false
})
export class PriorizarTodosTerminadoPipe implements PipeTransform {

  transform(todos: Array<Todo>): Array<Todo> {
    return todos.filter(todo => !todo.terminada).sort((a,b) => (b.importante && !a.importante) ? 1 : -1);
  }

}
