import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SidebarComponent} from './sidebar.component';
import { HeaderComponent} from './header.component';
import { ContentComponent} from './content.component';
import { AppRoutingModule, routedComponents } from './app.routing'; //TODO: Create app.routing
import { DialogsService } from './shared/dialogs.service';
import { TileComponent } from './dashboard/tile.component';
 
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, SidebarComponent, HeaderComponent, ContentComponent, routedComponents, TileComponent],
    providers: [ DialogsService ],
    bootstrap: [AppComponent],
})
export class AppModule { }
