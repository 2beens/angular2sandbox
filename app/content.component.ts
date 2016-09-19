import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'oso-content',
    template: 
    `<div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <router-outlet></router-outlet>
            </div>
        </div>`
})
export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}