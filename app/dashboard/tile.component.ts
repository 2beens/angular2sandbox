import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Statistics } from '../models/statistics' 

@Component({
    moduleId: module.id,
    selector: 'oso-tile',
    templateUrl: `tile.component.html`,
    //inputs: ["stats"],
    outputs: ["clicked"]
})
export class TileComponent implements OnInit {
    
    @Input()
    stats: Statistics;

    clicked: EventEmitter<Statistics> = new EventEmitter();
    
    constructor() { }

    ngOnInit() { }

    onClick() {
        this.clicked.emit(this.stats);
    }
}