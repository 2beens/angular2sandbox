import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    templateUrl: 'todos.component.html'
})
export class TodosComponent implements OnInit {
    constructor() { }

    todos: Todo[] = [
        new Todo('Dummy Todo 1', 'Dummy todo 1 text', 'Low'),
        new Todo('Dummy Todo 2', 'Dummy todo 2 text', 'Low'),
        new Todo('Dummy Todo 3', 'Dummy todo 3 text', 'High')
    ];

    ngOnInit() { }
}