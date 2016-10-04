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
            new Todo('Take the beer days ticket', 'Hey, don\'t forget to go to the Technomania and take that ticket to beer days!! ', 'High', 'warning'),
            new Todo('Dummy Todo 4', 'Dummy todo 4 text', 'Medium', 'success'),
            new Todo('Learn Angular 2', 'When you get home from work, rest, and try to read some Angular 2 learning material, it will come in handy with this new project!', 'High', 'warning'),
            new Todo('Dummy Todo 6', 'Dummy todo 6 text', 'High', 'danger')
        ]
     }

    ngOnInit() { }

    onTodoTileClicked(todo: Todo) {
        this.dialogsService.showInfo(todo.title);
    }

    onTodoFinished(todo: Todo) {
        var todoIndex = this.todos.indexOf(todo, 0);
        if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
        }

        this.dialogsService.showInfo('Todo finished: ' + todo.title);
    }

    newTodoCreated(todo: Todo) {
        this.todos.push(todo);
        this.dialogsService.showInfo('New todo created: ' + todo.title);
    }
}