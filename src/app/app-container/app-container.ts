import { Component } from '@angular/core';
import { Route, Router, RouterEvent, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <div>App Container Placeholder</div>
    <div>
    <ul>
      <li 
        *ngFor="let route of routes"
        routerLink="{{route.path}}">
        {{route.path}}
      </li>
    </ul>
    </div>
    <router-outlet>
      <span class="loader" *ngIf="loading"></span>
    </router-outlet>
  `
})
export class AppContainer {
  public loading: boolean;
  public routes: Array<Route> = [];

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
