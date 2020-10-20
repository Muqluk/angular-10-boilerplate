import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerSelectEvent } from '@progress/kendo-angular-layout';

import { Route, Router, RouterEvent, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  styleUrls: ['app-container.scss'],
  templateUrl: 'app-container.html',
})
export class AppContainer {
  public loading: boolean;
  public routes: Array<Route> = [];s

  constructor(router: Router) {
    this.loading = false;
    this.routes = router.config;
    router.events.subscribe(this.routerEventSubscriber);
  }

  routerEventSubscriber(e: any): void { // eslint-disable-line
    if (e instanceof NavigationStart) {
      console.log("router event {e}: ", e);// eslint-disable-line
      this.loading = true;
    } else if (e instanceof NavigationEnd) {
      console.log("router event {e}: ", e);// eslint-disable-line
      this.loading = false;
    }
  }
}
