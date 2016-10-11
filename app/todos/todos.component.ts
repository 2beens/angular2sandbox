import { Component, OnInit } from '@angular/core';

import { DialogsService } from '../shared/dialogs.service';
import { ConfigService } from '../shared/config.service';
import { TodoService } from './services/todo.service';
import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    templateUrl: 'todos.component.html'
})
export class TodosComponent implements OnInit {

    todos: Todo[] = [];
    finishedTodos: Todo[] = [];

    allTodosCount: number;
    clearedTodosPercentage: string;

    constructor(
        private dialogsService: DialogsService, 
        private todoService: TodoService,
        private configService: ConfigService) {
        todoService
            .getTodos()
            .then(todos => {
                this.allTodosCount = todos.length;

                this.todos = todos.filter(todo => !todo.isFinished);
                this.finishedTodos = todos.filter(todo => todo.isFinished);

                this.recalculateClearedTodosPercentage();
            });
     }

     private recalculateClearedTodosPercentage(): void {
         if(this.todos.length === 0) {
             this.clearedTodosPercentage = '100%';
         } else {
             this.clearedTodosPercentage = Math.round(100 - ((this.todos.length / this.allTodosCount) * 100)) + '%';
         }
         console.log('new percentage = ' + this.clearedTodosPercentage);
     }

     ngOnInit() {
        
     }

     onTodoTileClicked(todo: Todo) {
         this.dialogsService.showInfo(todo.title, todo.text);
     }

     onTodoFinished(todo: Todo) {
         let self = this;

         this.dialogsService.showClearTodoDialog((isConfirm) => {
             if (isConfirm) {
                 var todoIndex = self.todos.indexOf(todo, 0);
                 if (todoIndex > -1) {
                     self.todos.splice(todoIndex, 1);
                 }

                 self.recalculateClearedTodosPercentage();

                 todo.isFinished = true;
                 todo.finishedAt = Date.now();
                 self.todoService.updateTodo(todo); 
             }
         });
     }

    newTodoCreated(todo: Todo) {
        this.todoService.saveTodo(todo)
            .then(todo => {
                this.todos.push(todo);
                this.allTodosCount++;
                this.recalculateClearedTodosPercentage();
                this.dialogsService.showInfo
                    ('Info', 'New todo created: ' + todo.title + ', id: ' + todo.id);
            });
    }
}