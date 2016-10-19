import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    selector: 'todos-table',
    templateUrl: 'todos-table.component.html'
})
export class TodosTableComponent implements OnInit {

    @Input()
    todos: Todo[];

    constructor() { }

    ngOnInit() { }
}