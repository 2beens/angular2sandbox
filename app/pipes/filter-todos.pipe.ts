import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../models/todos/todo';

@Pipe({
    name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {
    transform(todos: Todo[], searchFilter: string): Todo[] {
        return todos.filter(todo => 
            todo.title.toLowerCase().includes(searchFilter.toLowerCase())
        );
    }
}