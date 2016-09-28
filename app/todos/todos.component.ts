import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'todos.component.html'
})
export class TodosComponent implements OnInit {
    constructor() { }
    
    heroName: string = 'Mr. IQ';

    ngOnInit() { }
}