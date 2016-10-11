import { Component, OnInit } from '@angular/core';

import { DialogsService } from '../shared/dialogs.service';
import { ConfigService } from '../shared/config.service';
import { TodoService } from './services/todo.service';
import { Todo } from '../models/todos/todo';

import 'node_modules/sweetalert/dist/sweetalert.min.js';

@Component({
    moduleId: module.id,
    templateUrl: 'todos.component.html'
})
export class TodosComponent implements OnInit {

    todos: Todo[] = [];

    constructor(
        private dialogsService: DialogsService, 
        private todoService: TodoService,
        private configService: ConfigService) {
        todoService
            .getTodos()
            .then(todos => {
                this.todos = todos.filter(function(todo) {
                    return !todo.isFinished;
                });
            });
     }

    ngOnInit() {
        
    }

    onTodoTileClicked(todo: Todo) {
        this.dialogsService.showInfo(todo.title, todo.text);
    }

    onTodoFinished(todo: Todo) {
        let self = this;

        swal({
            title: "Are you sure?",   
            text: "You will be able to return this Todo into 'standby' state!",   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Yes, clear it!",   
            cancelButtonText: "No, cancel plx!",   
            closeOnConfirm: false,   
            closeOnCancel: false 
        }, function(isConfirm) {
            if (isConfirm) {
                var todoIndex = self.todos.indexOf(todo, 0);
                if (todoIndex > -1) {
                    self.todos.splice(todoIndex, 1);
                }

                todo.isFinished = true;
                todo.finishedAt = Date.now();
                self.todoService.updateTodo(todo);
                
                swal("Finished!", "Your todo has been marked as finished.", "success");   
            } else {     
                swal("Cancelled", "Your todo is left unfinished.", "error");   
            }
        });
    }

    newTodoCreated(todo: Todo) {
        this.todoService.saveTodo(todo)
            .then(todo => {
                this.todos.push(todo);
                this.dialogsService.showInfo
                    ('Info', 'New todo created: ' + todo.title + ', id: ' + todo.id);
            });
    }
}