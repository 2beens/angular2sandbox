import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-tile',
    templateUrl: `todo-tile.component.html`,
    outputs: ["clicked"]
})
export class TodoTileComponent implements OnInit {
    @Input()
    todo: Todo;

    clicked: EventEmitter<Todo> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.clicked.emit(this.todo);
    }
}