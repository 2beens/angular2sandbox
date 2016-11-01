import { Component, EventEmitter } from '@angular/core';

import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    outputs: ['todoCreated']
})
export class TodoFormComponent  {
    todoCreated: EventEmitter<Todo> = new EventEmitter();

    priorities = ['High', 'Normal', 'Low'];

    model = this.initializeTodoModel();

    submitted = false;
    onSubmit() { 
        this.submitted = true;
        if(this.model.priority === 'High')
            this.model.priorityColor = 'danger';
        else if(this.model.priority === 'Normal')
            this.model.priorityColor = 'success';
        else
            this.model.priorityColor = 'primary';

        this.todoCreated.emit(this.model);
    }

    active = true;
    newTodo() {
        this.model = this.initializeTodoModel();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    initializeTodoModel(): Todo {
        return new Todo(0, '', '', 'Normal', 'success', false, Date.now(), Date.now());
    }
}