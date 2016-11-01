import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../models/todos/todo';
import { ToastrService } from '../shared/toastr.service';

@Component({
    moduleId: module.id,
    selector: 'todos-table',
    templateUrl: 'todos-table.component.html'
})
export class TodosTableComponent implements OnInit {

    @Input()
    _todos: Todo[];

    @Input()
    set todos(todos: Todo[]) {
        this._todos = todos;
        if(this._todos !== null && this._todos !== undefined) {
            setTimeout(() => {
                this.toastr.showSuccess('[' + this._todos.length + '] todos loaded.');    
            }, 400);
        }
    }

    // all, completed, uncompleted
    todosType = '0';
    
    constructor(private toastr: ToastrService) { }

    ngOnInit() {
        this.toastr.showInfo('Loading all todos...');
    }

    onTodosTypeChange(type) {
        this.todosType = type;
    }
}