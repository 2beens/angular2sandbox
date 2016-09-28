import { Component } from '@angular/core';

import { Todo } from '../models/todos/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html'
})
export class TodoFormComponent  {
    priorities = ['High', 'Normal', 'Low'];

    model = new Todo('', '', 'Normal');

    submitted = false;

    onSubmit() { 
        this.submitted = true; 
    }
}