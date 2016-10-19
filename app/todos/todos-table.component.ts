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
    todos: Todo[];

    todosType = '0';

    constructor(private toastr: ToastrService) { 
        toastr.showSuccess();
    }

    ngOnInit() { }

    onTodosTypeChange(type) {
        console.log(type);
        this.todosType = type;
    }
}