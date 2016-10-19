import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent} from './sidebar.component';
import { HeaderComponent} from './header.component';
import { ContentComponent} from './content.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { DialogsService } from './shared/dialogs.service';
import { ConfigService } from './shared/config.service';
import { TileComponent } from './dashboard/tile.component';

import { ShorterPipe } from './pipes/shorter.pipe';

// TODOs ENTITIES  //////////////////////////////////////////////////
import { TodoFormComponent } from './todos/todo-form.component';
import { TodosTableComponent } from './todos/todos-table.component';
import { TodoTileComponent } from './todos/todo-tile.component';
import { TodoService } from './todos/services/todo.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent, 
        SidebarComponent, 
        HeaderComponent, 
        ContentComponent, 
        TileComponent,
        TodoFormComponent,
        TodosTableComponent,
        TodoTileComponent,
        ShorterPipe,
        routedComponents
    ],
    providers: [ 
        DialogsService,
        ConfigService,
        TodoService        
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
    constructor(private configService: ConfigService) {
        this.configService.load();
    }
}
