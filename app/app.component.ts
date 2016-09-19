import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
        <div id="wrapper">
            <oso-sidebar></oso-sidebar>
            <div id="page-wrapper" class="gray-bg">
                <oso-header></oso-header>
                <oso-content></oso-content>
                <div class="footer">
                    <div class="pull-right">
                        10GB of <strong>250GB</strong> Free.
                    </div>
                    <div>
                        <strong>Copyright</strong> Example Company &copy; 2014-2017
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppComponent { }
