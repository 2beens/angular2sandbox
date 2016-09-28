import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent} from './sidebar.component';
import { HeaderComponent} from './header.component';
import { ContentComponent} from './content.component';
import { AppRoutingModule, routedComponents } from './app.routing'; //TODO: Create app.routing
import { DialogsService } from './shared/dialogs.service';
import { TileComponent } from './dashboard/tile.component';
import { TodoFormComponent } from './todos/todo-form.component';
 
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
        routedComponents 
    ],
    providers: [ 
        DialogsService 
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
