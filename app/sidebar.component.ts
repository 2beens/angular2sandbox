import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'oso-sidebar',
    templateUrl: 'sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        
    }

    onLinkClicked(activeLink, sideBarMenu) {
        for (let navBarLink of sideBarMenu.children) {
            navBarLink.classList.remove('active'); 
        }
        activeLink.classList.add("active");
    }
}