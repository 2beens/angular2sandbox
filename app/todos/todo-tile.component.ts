import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-tile',
    templateUrl: 'todo-tile.component.html'
})
export class TodoTileComponent implements OnInit {
    @Input()
    todo: Todo;

    constructor() { }

    ngOnInit() { }

    onClick() {

    }
}