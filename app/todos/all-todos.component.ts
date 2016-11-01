import { Component, OnInit, EventEmitter } from '@angular/core';

import { ConfigService } from '../shared/config.service';
import { TodoService } from './services/todo.service';
import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    templateUrl: 'all-todos.component.html'
})
export class AllTodosComponent implements OnInit {

    todos: Todo[];

    constructor(private todoService: TodoService) {
        todoService.getTodos()
            .then(todos => this.todos = todos);
    }

    ngOnInit() { }
}