import { enableProdMode, NgModuleRef } from '@angular/core'; // eslint-disable-line
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  import('@ngxs/hmr-plugin').then(plugin => {
    plugin.hmr(module, bootstrap).catch((err: Error) => console.error(err)); // eslint-disable-line
  });
} else {
  bootstrap().catch((err: Error) => console.log(err)); // eslint-disable-line
}

