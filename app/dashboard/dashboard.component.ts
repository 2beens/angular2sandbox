import { Component, OnInit } from '@angular/core';
import { DialogsService } from '../shared/dialogs.service';
import { Statistics } from '../models/statistics'
//import { ContextCommand } from '../models/contextCommand';

@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    
    stats: Statistics[] = [];

    constructor(private dialogsService: DialogsService) { 
        this.stats = [
            new Statistics("Income 1", "Weekly", 14400, "New inocome", 0.93, "success"),
            new Statistics("Income 2", "Weekly", 10000, "New inocome", 0.93, "danger"),
            new Statistics("Income 3", "Weekly", 10000, "New inocome", 0.93, "default"),
            new Statistics("Income 4", "Weekly", 10000, "New inocome", 0.93, "warning"),
            new Statistics("Users", "Weekly", 625326, "Online users", 0.30),
        ]
    }

    ngOnInit() {

    }

    onTileClicked(stat: Statistics) {
        this.dialogsService.showError(stat.caption);
    }
}