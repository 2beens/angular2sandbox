import { Component } from '@angular/core';

import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html'
})
export class TodoFormComponent  {
    priorities = ['High', 'Normal', 'Low'];

    model = this.initializeTodoModel();

    submitted = false;

    onSubmit() { 
        this.submitted = true; 
    }

    active = true;
    newTodo() {
        this.model = this.initializeTodoModel();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    initializeTodoModel(): Todo {
        return new Todo('', '', 'Normal', 'success');
    }
}