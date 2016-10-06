import { Component, OnInit } from '@angular/core';

import { DialogsService } from '../shared/dialogs.service';
import { TodoService } from './services/todo.service';
import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    templateUrl: 'todos.component.html'
})
export class TodosComponent implements OnInit {

    todos: Todo[] = [];

    constructor(private dialogsService: DialogsService, private todoService: TodoService) {
        this.todos = todoService.getTodos();
     }

    ngOnInit() { }

    onTodoTileClicked(todo: Todo) {
        this.dialogsService.showInfo(todo.title, todo.text);
    }

    onTodoFinished(todo: Todo) {
        var todoIndex = this.todos.indexOf(todo, 0);
        if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
        }

        this.dialogsService.showInfo('Info', 'Todo finished: ' + todo.title);
    }

    newTodoCreated(todo: Todo) {
        this.todos.push(todo);
        this.dialogsService.showInfo('Info', 'New todo created: ' + todo.title);
    }
}