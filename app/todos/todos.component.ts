import { Component, OnInit } from '@angular/core';

import { DialogsService } from '../shared/dialogs.service';
import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    templateUrl: 'todos.component.html'
})
export class TodosComponent implements OnInit {

    todos: Todo[] = [];

    constructor(private dialogsService: DialogsService) {
        this.todos = [
            new Todo('Dummy Todo 1', 'Dummy todo 1 text', 'Low', 'warning'),
            new Todo('Dummy Todo 2', 'Dummy todo 2 text', 'Low', 'danger'),
            new Todo('Dummy Todo 3', 'Dummy todo 3 text', 'High', 'warning'),
            new Todo('Dummy Todo 4', 'Dummy todo 4 text', 'Medium', 'success'),
            new Todo('Dummy Todo 5', 'Dummy todo 5 text', 'High', 'warning'),
            new Todo('Dummy Todo 6', 'Dummy todo 6 text', 'High', 'danger')
        ]
     }

    ngOnInit() { }

    onTodoTileClicked(todo: Todo) {
        this.dialogsService.showInfo(todo.title);
    }
}