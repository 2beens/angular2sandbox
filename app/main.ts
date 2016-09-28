import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(
        error => {
            if(error.message !== null && error.message !== undefined) {
                console.error(error.message);
            } else {
                console.error(error);
            }
        });
